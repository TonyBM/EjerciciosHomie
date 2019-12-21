namespace :generate_homes do
  desc "TODO"
  task generate_2_homes: :environment do
    user_new = User.new(name: "tony")
    owner_new =Owner.new(user:user_new)
    first_home = Home.new(price:10000, extra_service: 200, owner: owner_new)
    second_home = Home.new(price:4400, extra_service: 230,owner: owner_new)
    first_home.save!
    second_home.save!
  end
end
