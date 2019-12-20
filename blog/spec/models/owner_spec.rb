require 'rails_helper'
RSpec.describe Owner, type: model do
    let(:owner) { build(:owner) }
    it{ should have_many(:homes)}
    describe "Validations" do 
        it "is not valid without home" do
            :owner.home = nil
            expect(:owner).to_not be_valid
        end
    end
end