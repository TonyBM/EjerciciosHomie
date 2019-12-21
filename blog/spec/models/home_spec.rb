require 'rails_helper'

RSpec.describe Home, type: :model do
  let(:home) { build(:home) }
  describe "Associations" do 
    it{ should belong_to(:owner)}
    it{ should have_many(:rents)}
  end
end