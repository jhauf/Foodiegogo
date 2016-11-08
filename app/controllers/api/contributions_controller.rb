class Api::ContributionsController < ApplicationController

  def create
    @contribution = Contribution.new(contribution_params)
    if @contribution.save
      @campaign = @contribution.campaign
      @campaign.current_amt += @contribution.donation_amt
      @campaign.save
      render :show
    else
      render json: @contribution.errors.full_messages, status: 422
    end
  end

  def show
    @contribution = Contribution.find(params[:id])
  end

  def index
    @campaign = Campaign.find(params[:campaign_id])
    @contributions = @campaign.perks
  end


  private

  def contribution_params
    params.require(:contribution).permit(:date, :donation_amt, :campaign_id, :contributor_id, :perk_id)
  end
end
