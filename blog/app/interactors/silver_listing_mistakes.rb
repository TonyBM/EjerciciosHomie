class SilverListingMistakes
	include Interactor
	
  def call
    silver_mistakes_id = []
    s_names = [] #borrar

    Home::Listing::Outstanding.each do |outstanding|
      listing = Home::Listing.where({home_id: outstanding.home_id}).first
      next unless listing.nil? || !listing.publish_xml_or_response.match?(/silver/)
      silver_mistakes_id.push(listing.home_id) 
      s_names.push(listing.home.title)
    end

    result = {
      mistakes_numer: silver_mistakes_id.count, 
      mistakes_ids: silver_mistakes_id,
      names: s_names
    }
   p result
	end
end