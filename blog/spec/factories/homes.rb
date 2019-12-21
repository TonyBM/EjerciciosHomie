FactoryBot.define do
    factory :home do
      owner {FactoryBot.create(:owner)}
      price { Faker::Number.number(digits: 10) }
      extra_service { Faker::Number.number(digits: 10) }
    end
  end