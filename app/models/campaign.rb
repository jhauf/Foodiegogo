class Campaign < ActiveRecord::Base

validates :name, :goal_amt, :description, :end_date, presence: true
belongs_to :user
has_many :perks
has_many :contributions
end
