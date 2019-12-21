require 'rails_helper'
RSpec.describe Rent, type: :model do
  let(:rent) { build(:rent) }
  it{ should belong_to(:home)}
  it{ should belong_to(:user)}
  it { should validate_presence_of(:user) }
  describe 'a' do
    it 'asdasd' do
      expect(rent).to be_valid
    end
  end
end