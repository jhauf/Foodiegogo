json.extract! campaign, :id, :name, :goal_amt, :current_amt, :description, :end_date, :picture_url, :campaigner_id, :video_url, :category

json.contributors campaign.contributors
json.perks campaign.perks
