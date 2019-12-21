class Rent
  include Mongoid::Document
  include Mongoid::Enum
  belongs_to :home
  belongs_to :user
  enum :status, [:started, :finished, :canceled]
  validates :home, presence: {}
  validates :user, presence: {}
end
