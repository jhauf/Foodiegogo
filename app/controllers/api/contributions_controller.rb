class Api::ContributionsController < ApplicationController

  def create
    @contribution = Contribution.new(contribution_params)
    if @contribution.save
      render :show
    else
      render json: @contribution.errors.full_messages, status: 422
    end
  end

  def show
    @contribution = Contribution.find(params[:id])
  end


  private

  def contribution_params
    params.require(:contribution).permit(:date, :donation_amt, :campaign_id, :contributor_id, :perk_id)
  end
end
