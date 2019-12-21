FactoryBot.define do
    factory :owner do
      user {FactoryBot.create(:user)}
      curp {FFaker::IdentificationMX.curp}
      registered_in_srpago {Faker::Boolean.rand}
    end
end