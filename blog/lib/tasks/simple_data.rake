namespace :db do
  desc "Fill database with sample videos"
  task :populate => :environment do
    user_new = user.new(name: "tony")
    owner.new(user:user_new)
    first_home = Home.new(price:10000, extra_service: 200, owner: user_new)
    second_home = Home.new(price:4400, extra_service: 230,owner: user_new)
    first_home.save!
    second_home.save!
  end
end