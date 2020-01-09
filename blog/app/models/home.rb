class Home
  include Mongoid::Document
  include Mongoid::Enum

  after_create :calculate_total_amount
  after_update :calculate_total_amount
  field :price, type: Float
  field :extra_service, type: Float
  field :total_amount, type: Float
  field :home_features, type: Hash, default: { garden: false, furnished: false, gym: false }
  field :location, type: Array, default: []
  field :master_home_id, type: String, default: nil
  enum :status, [:in_progress, :published, :rented]
  belongs_to :owner
  has_many :rents
  validates :price, presence: { message: 'insertar precio' }

  private

  def calculate_total_amount
    self.total_amount = self.price + self.extra_service
  end
end
=begin
Atributos: price, extra_service, total_amount, home_features de tipo hash con llaves, garden, furnished, gym, con valores booleanos
=end