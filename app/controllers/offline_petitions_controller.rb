class OfflinePetitionsController < ApplicationController
  def create
    @offline_petition = OfflinePetition.new(offline_petition_params)
    check_password(@offline_petition.pass_word) ? @offline_petition.save : flash[:notice] = '비밀번호가 틀렸습니다'
    redirect_to admin_path
  end

  private

  def offline_petition_params
    params.require(:offline_petition).permit(:offline_count, :pass_word)
  end

  def check_password(pass_word)
    pass_word == '1dkdlznq@#'
  end
end
