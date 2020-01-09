class SimilarHome
  include Mongoid::Document

  def self.display_similar_homes
    id_owner = Owner.pluck(:id)
    home_with_values=[]
    similars =[]
    id_owner.each do |id|
      homes = Home.where(owner_id: id, _status: :published).entries

      amounts = homes.map{|home| home.total_amount}.uniq
      locations = homes.map{|home| home.location}.uniq


      amounts.each do |amount|
        locations.each do |location|

          home_with_values.clear
          homes.each do |home|

            next unless home.location == location && home.total_amount == amount
            next if home_with_values.include? home

            home_with_values.push(home)
          end
          print_homes(home_with_values) if home_with_values.size >= 2
        end
      end
    end
  end

  def self.print_homes(homes)
    homes.each do |home|
        puts "owner: #{home.owner_id} id:#{home.id} total_amount:#{home.total_amount} location: #{home.location}"
    end
    puts " "
  end
end