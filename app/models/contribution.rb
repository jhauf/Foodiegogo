class Contribution < ActiveRecord::Base

    validates :date, :donation_amt, :campaign_id, :contributor_id, presence: true
    belongs_to :user
    belongs_to :perk
    belongs_to :campaign
end
