FactoryBot.define do
    factory :owner do
        homes {FactoryBot.create(:home)}
        user {FactoryBot.create(:user)}
    end
end