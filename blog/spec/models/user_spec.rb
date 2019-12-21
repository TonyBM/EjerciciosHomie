require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { build(:user) }
  it{ should have_many(:rents)}
  describe "Validations" do
    it { should validate_presence_of(:name)}
    it {expect(user).to be_valid}
  end
end
