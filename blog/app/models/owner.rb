class Owner
  include Mongoid::Document
  has_many :homes
end
