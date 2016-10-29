class PagesController < ApplicationController
  def home
    @petitions = Petition.recent.page params[:page]
    @online_count = Petition.count
    @offline_count = (OfflinePetition.count == 0 ? 0 : OfflinePetition.last.offline_count)
  end

  def download_emails
    if check_password(admin_password_params[:pass_word])
      @emails = Petition.all.oldest.select { |u| u.email.present? }.map { |u| {email: u.email,
       name: u.name, body: u.is_body_hidden ? nil : u.body, created_at: u.created_at.strftime("%Y년 %m월 %d일")} }.uniq { |u| u[:email] }
      respond_to do |format|
        format.xlsx
      end
    else
      flash[:notice] = '비밀번호가 틀렸습니다'
      redirect_to :back
    end
  end

  private

  def admin_password_params
    params.permit(:pass_word)
  end


  def check_password(pass_word)
    pass_word == '1dkdlznq@#'
  end
end
