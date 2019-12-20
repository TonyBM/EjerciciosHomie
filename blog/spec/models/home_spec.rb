require 'rails_helper'

RSpec.describe Home, type: :model do
  let(:home) { build(:home) }
  describe "Associations" do 
    it{ should belong_to(:owner)}
    it{ should have_many(:rents)}
  end
  describe "Validations" do
    it { should validate_presence_of(:home_features)}
    it "is not valid without a name" do
      home.name = nil
      expect(:home).to_not be_valid
    end
    it "is not valid without home_details" do
        home.home_details = nil
        expect(:home).to_not be_valid
    end
  end
end