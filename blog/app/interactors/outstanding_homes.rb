class OutstandingHomes
  include Interactor
  
  def call
    listing_mistakes_id = check_listing_mistakes
    outstanding_mistakes_ids = check_outstanding_mistakes

    listing_mistakes = { number: listing_mistakes_id.count, ids: listing_mistakes_id }

    gold_mistakes = outstanding_mistakes_ids.select{ |key,value| value[:level] == :gold}
    goldPremium_mistakes = outstanding_mistakes_ids.select{ |key,value| value[:level] == :gold_premium }
    silver_mistakes = outstanding_mistakes_ids.select{ |key,value| value[:level] == :silver }
    outstanding_mistakes = {
      golden: {
        number: gold_mistakes.count,
        ids: gold_mistakes
      },
      golden_premium: {
        number: goldPremium_mistakes.count,
        ids: goldPremium_mistakes
      },
      silver: {
        number: silver_mistakes.count,
        ids: silver_mistakes
      }
    }

    context.result = { outstanding_mistakes: outstanding_mistakes, listing_mistakes: listing_mistakes }

    context.result
  end

  protected 
  def check_listing_mistakes
    listing_mistakes_id = []

    Home::Listing::Outstanding.each do |outstanding|
      listing_home = Home::Listing.where(home_id: outstanding.home_id).first
      next unless listing_home.nil? || listed_differently?(outstanding, listing_home)
      listing_mistakes_id.push(outstanding.home_id)
    end

    listing_mistakes_id
  end

  def check_outstanding_mistakes
    outstanding_mistakes_ids = {}

    Home::Listing.each do |listing|
      outstanding_home = Home::Listing::Outstanding.where(home_id: listing.home_id).first
      next unless listing_mistake(listing, outstanding_home)
      outstanding_mistakes_ids["#{listing.home_id}"] = {id: listing.home_id, level: listing_type(listing)}
    end
    
    outstanding_mistakes_ids
  end
  def listing_mistake(listing, outstanding)           
    return false if outstanding.nil? && listing.publish_xml_or_response.include?("silver")
    return true if outstanding.nil? && !listing.publish_xml_or_response.include?("silver")
    return false if outstanding.listing_provider.name != listing.listing_name
    return true if listed_differently?(outstanding, listing)
    false
  end
  def listing_type(listing)
    return :silver if listing.publish_xml_or_response.include?("silver")
    return :gold if listing.publish_xml_or_response.include?("gold,")
    return :gold_premium if listing.publish_xml_or_response.include?("gold_premium")
  end
  def listed_differently?(outstanding_home, listing_home)
    !listing_home.publish_xml_or_response.include?("#{outstanding_home.outstanding_type},")
  end
end