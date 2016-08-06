class PetitionsController < ApplicationController

  def create
    @petition = Petition.new(petition_params)
    @petition.save

    respond_to do |format|
      format.js
      format.any { redirect_to root_path }
    end
  end

  private

  def petition_params
    params.require(:petition).permit(:name, :email, :body)
  end

end
