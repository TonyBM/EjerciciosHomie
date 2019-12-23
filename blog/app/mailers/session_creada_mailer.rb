class SessionCreadaMailer < ApplicationMailer
  default :from => "homie@correo.com"
  def index
    mail(to: "correo@correo.com") do |format|
      format.html { render layout: 'mailer' }
    end
  end
end
