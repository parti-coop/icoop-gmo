class PetitionsController < ApplicationController
  def index
    @petitions = Petition.recent.page params[:page]

    respond_to do |format|
      format.js
      format.any { redirect_to root_path }
    end
  end

  def create
    @petition = Petition.new(petition_params)
    @petition.save
    @petitions = Petition.recent.page params[:page]

    respond_to do |format|
      format.js
      format.any { redirect_to root_path }
    end
  end

  private

  def petition_params
    params.require(:petition).permit(:name, :email, :body, :policy_agree)
  end

end
