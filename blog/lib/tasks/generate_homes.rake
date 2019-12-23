namespace :generate_homes do
  desc "TODO"
  task generate_2_homes: :environment do
    user_new = User.find_or_create_by(name: "tony")
    owner_new =Owner.find_or_create_by(user: user_new)
    first_home = Home.find_or_create_by(price: 10000, extra_service: 200, owner: owner_new)
    second_home = Home.find_or_create_by(price: 4400, extra_service: 230, owner: owner_new)
    first_home.save!
    second_home.save!
  end
end
