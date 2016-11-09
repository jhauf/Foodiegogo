class Campaign < ActiveRecord::Base

validates :name, :goal_amt, :description, :end_date, presence: true

belongs_to :user, foreign_key: :campaigner_id
has_many :perks
has_many :contributions
has_many :contributors, through: :contributions, source: :user


end
