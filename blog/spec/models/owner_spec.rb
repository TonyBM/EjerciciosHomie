require 'rails_helper'
RSpec.describe Owner, type: :model do
  let(:owner) { build(:owner) }
  it{ should have_many(:homes) }
  it{expect(owner).to be_valid}

end