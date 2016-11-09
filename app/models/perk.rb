class Perk < ActiveRecord::Base
  validates :name, :donation_amt, presence: true
  belongs_to :campaign
  has_many :contributions
end
