FactoryBot.define do
  factory :rent do

    home {FactoryBot.create(:home)}
    user {FactoryBot.create(:user)}
  end
end