class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :prepare_meta_tags, if: "request.get?"
  after_filter :prepare_unobtrusive_flash

  def errors_to_flash(model)
    flash[:notice] = model.errors.full_messages.join('<br>').html_safe
  end

  def prepare_meta_tags(options={})
    set_meta_tags build_meta_options(options)
  end

  def build_meta_options(options)
    site_name = "GMO완전표시제 입법 청원과 지지를 위한 서명 "
    title = "GMO완전표시제 입법 청원과 지지를 위한 서명프로젝트 '바꿈'"
    image = options[:image] || view_context.image_url('seo.png')
    url = options[:url] || root_url

    description = "아이쿱 x 빠띠 GMO완전표시제 입법 청원과 지지를 위한 서명프로젝트 '바꿈'"
    {
      title:       title,
      reverse:     true,
      image:       image,
      description: description,
      keywords:    "빠띠, 아이쿱, 정치, 법률, 입법, 시민, GMO, GMO 완전표시제법, 디지털 민주주의",
      canonical:   url,
      twitter: {
        site_name: site_name,
        site: '@parti_xyz',
        card: 'summary',
        title: title,
        description: description,
        image: image
      },
      og: {
        url: url,
        site_name: site_name,
        title: title,
        image: image,
        description: description,
        type: 'website'
      }
    }
  end
end
