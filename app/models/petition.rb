class Petition < ActiveRecord::Base
  paginates_per 3

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end
