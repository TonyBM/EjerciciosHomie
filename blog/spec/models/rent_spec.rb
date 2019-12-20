require 'rails_helper'
RSpec.describe Rent, type: model do
  let(:rent) { build(:rent) }
  it{ should belong_to(:homes)}
  it{ should belong_to(:users)}
  saved_rent = rent.save
  expect(saved_rent).to be_valid
  describe "Validations" do 
    it "is not valid without home" do
      rent.home = nil
        expect(:owner).to_not be_valid
    end
    it "is not valid without user" do
      rent.home = nil
      expect(:rent).to_not be_valid
    end
  end
end