class Petition < ActiveRecord::Base
  paginates_per 3

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true

  def on_off_count
    Petition.count.to_i + OfflinePetition.last.offline_count.to_i
  end

  def total_percentage
    return 0 if on_off_count == 0
    (on_off_count / Float(100000) * 100).round(1)
  end
end
