class PagesController < ApplicationController
  def home
    @petitions = Petition.page params[:page]
  end
end
