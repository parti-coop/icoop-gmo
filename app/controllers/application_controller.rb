class ApplicationController < ActionController::Base
  after_filter :prepare_unobtrusive_flash

  protect_from_forgery with: :exception

  def errors_to_flash(model)
    flash[:notice] = model.errors.full_messages.join('<br>').html_safe
  end
end
