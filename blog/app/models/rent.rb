class Rent
  belongs_to :home
  belongs_to :user
  enum :status, [:started, :finished, :canceled]
end
