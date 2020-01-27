require 'rails_helper'
describe CheckSimilarhomes do
  let!(:owner) { FactoryBot.create(:owner) }
  let!(:home1) { Home.create(price: 10000, extra_service: 230, total_amount:1100, owner: owner, location:[100,100], _status: 'published') }
  let!(:home2) { Home.create(price: 10000, extra_service: 230, total_amount:1100, owner: owner, location:[100,100], _status: 'published') }
  let!(:home3) { Home.create(price: 100, extra_service: 230, total_amount:100, owner: owner, location:[100,100], _status: 'published') }
  let!(:similarhomes_ctx) { CheckSimilarhomes.call }
  
  it { expect(similarhomes_ctx).to be_a_success }
  it { expect(similarhomes_ctx.similars[0]).to eq([home1,home2]) }
  
end