class OfflinePetitionsController < ApplicationController
  def create
    @offline_petition = OfflinePetition.new(offline_petition_params)
    @offline_petition.save
    redirect_to admin_path
  end

  private

  def offline_petition_params
    params.require(:offline_petition).permit(:offline_count)
  end
end
