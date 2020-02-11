class Home::Listing::Outstanding
  include Mongoid::Document
  include Mongoid::Enum

  
  mercado_libre_types = %i[gold_premium gold]

  field :expires_at, type: Date
  enum :outstanding_type, mercado_libre_types

  belongs_to :home
  belongs_to :listing_provider

  validate :validate_presence_home
  validates :listing_provider, presence: true

  scope :non_expired, -> {where(:expires_at.gt => Time.now)}


  def validate_presence_home
    Home.unscoped.find(id: self.home_id) rescue errors.add(:home, I18n.t(:home_required))
  end

end
