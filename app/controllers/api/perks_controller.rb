class Api::PerksController < ApplicationController

  def show
    @perk = Perk.find(params[:id])
  end

  def create
    @perk = Perk.new(perk_params)
    if @perk.save
      render :show
    else
      render json: @perk.errors.full_messages, status: 422
    end
  end

  def update
    @perk = Perk.find(params[:id])
    if @perk.update(perk_params)
      render :show
    else
      render json: @perk.errors.full_messages, status: 422
    end
  end

  def destroy
    @perk = Perk.find(params[:id])

    if @perk.destroy
      render :show
    else
      render json: @perk.errors.full_messages, status: 422
    end
  end


  private

  def perk_params
    params.require(:perk).permit(:name, :donation_amt, :picture_url, :campaign_id, :contribution_id)
  end
end
