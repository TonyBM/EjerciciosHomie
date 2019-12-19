class Home
  include Mongoid::Document
  belongs_to :owner
  has_many :rents
  validates :home_features, inclusion: { garden: [true, false], furnished: [true, false], gym:[true, false] }
  field price, type: Integer
  field extra_service, type: String
  field total_amount, type: Float
  field home_features, type: Hash, default: { garden: false, furnished: false, gym: false }
end
=begin
Atributos: price, extra_service, total_amount, home_features de tipo hash con llaves, garden, furnished, gym, con valores booleanos
=end