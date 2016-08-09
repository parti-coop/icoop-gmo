class Petition < ActiveRecord::Base
  paginates_per 5
  scope :recent, -> { order(created_at: :desc) }
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :policy_agree, presence: true
  attr_accessor :policy_agree

  def on_off_count
    Petition.count.to_i + (OfflinePetition.count == 0 ? 0 : OfflinePetition.last.offline_count.to_i)
  end

  def total_percentage
    return 0 if on_off_count == 0
    (on_off_count / Float(100000) * 100).round(1)
  end
end
