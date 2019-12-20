require 'rails_helper'

RSpec.describe User, type: :model do
  subject { described_class.new(name: ,"Tony")}
  it{ should have_many(:rents)}
  describe "Validations" do
    it { should validate_presence_of(:name)}
    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end
  end
end
