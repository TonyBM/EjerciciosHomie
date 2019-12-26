class SessionCreadaMailer < ApplicationMailer
  default :from => "homie@correo.com"
  def index
    mail(to: "correo@correo.com", subject: 'Se ha publicado un nuevo libro!')
  end
end
