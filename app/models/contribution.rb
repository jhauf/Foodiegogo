class Contribution < ActiveRecord::Base

    validates :date, :donation_amt, :campaign_id, :contributor_id, presence: true
    belongs_to :perk
    belongs_to :campaign
    belongs_to :user, foreign_key: :contributor_id
end
