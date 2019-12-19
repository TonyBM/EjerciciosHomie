require 'rails_helper'

RSpec.describe User, type: :model do
  it{ should have_many(:rents)}
  describe "Validations" do
    it { should validate_presence_of(:name)}
  end
end
