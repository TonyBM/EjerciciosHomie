FactoryBot.define do
    factory :owner do
        homes {FactoryBot.create(:home)}
    end
end