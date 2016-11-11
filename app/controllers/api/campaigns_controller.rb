class Api::CampaignsController < ApplicationController
  def index
    if params[:query]
      @campaigns = Campaign.where("name ILIKE ?", "%#{params[:query]}%")
    else
      @campaigns = Campaign.all
    end
  end

  def show
    @campaign = Campaign.find(params[:id])
  end

  def create
    @campaign = Campaign.new(campaign_params)
    if @campaign.save
      render :show
    else
      render json: @campaign.errors.full_messages, status: 422
    end
  end



  def update
    @campaign = Campaign.find(params[:id])

    if @campaign.update(campaign_params)
      render :show
    else
      render json: @campaign.errors.full_messages, status: 422
    end
  end

  def destroy
    @campaign = Campaign.find(params[:id])

    if @campaign.destroy
      render :show
    else
      render json: @campaign.errors.full_messages, status: 422
    end
  end

  private

  def campaign_params
    params.require(:campaign).permit(:name, :goal_amt, :current_amt, :description, :end_date, :picture_url, :video_url, :campaigner_id, :category)
  end
end
