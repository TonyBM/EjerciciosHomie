class User
  include Mongoid::Document
  validates :name, presence: { message: 'no tienes nombre? pendejo' }
  field :email, type: String
  field :name, type: String
  field :last_name, type: String
  field :mobile_phone, type: String
end
