namespace :generate_similar do
	desc "TODO"
	task generate_similar_homes: :environment do
	  user_new = User.find_or_create_by(name: "usuario")
	  owner_new =Owner.find_or_create_by(user: user_new)
	  first_home = Home.new(price: 10000, extra_service: 230, total_amount:1100, owner: owner_new, location:[100,100])
	  second_home = Home.new(price: 10000, extra_service: 230, total_amount:1100, owner: owner_new, location:[100,100])
	  third_home = Home.new(price: 12300, extra_service: 230, total_amount:10000, owner: owner_new, location:[100,100])
	  first_home.save!
	  second_home.save!
	  third_home.save!
	  first_home.published!
	  second_home.published!
	  third_home.published!

	  user_new2 = User.find_or_create_by(name: "tony")
	  owner_new2 = Owner.find_or_create_by(user: user_new2)
	  first_home2 = Home.new(price: 10000, extra_service: 230, total_amount:1100, owner: owner_new2, location:[100,100])
	  second_home2 = Home.new(price: 10000, extra_service: 230, total_amount:1100, owner: owner_new2, location:[100,100])
	  third_home2 = Home.new(price: 12300, extra_service: 230, total_amount:1100, owner: owner_new2, location:[100,100])
	  first_home2.save!
	  second_home2.save!
	  third_home2.save!
	  first_home2.published!
	  second_home2.published!
	  third_home2.published!

	  user_new3 = User.find_or_create_by(name: "barbas")
	  owner_new3 =Owner.find_or_create_by(user: user_new3)
	  first_home3 = Home.new(price: 10000, extra_service: 230, total_amount:1100, owner: owner_new3, location:[200,100])
	  second_home3 = Home.new(price: 10000, extra_service: 230, total_amount:1100, owner: owner_new3, location:[100,100])
	  third_home3 = Home.new(price: 12300, extra_service: 230, total_amount:1100, owner: owner_new3, location:[100,100])
	  first_home3.save!
	  second_home3.save!
	  third_home3.save!
	  first_home3.published!
	  second_home3.published!
	  third_home3.published!
	end
  end
  