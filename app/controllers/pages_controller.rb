class PagesController < ApplicationController
  def home
    @petitions = Petition.recent.page params[:page]
    @online_count = Petition.count
    @offline_count = (OfflinePetition.count == 0 ? 0 : OfflinePetition.last.offline_count)
  end
end
