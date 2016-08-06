class PagesController < ApplicationController
  def home
    @petitions = Petition.page params[:page]
    @online_count = Petition.count
    @offline_count = OfflinePetition.last.offline_count
  end
end
