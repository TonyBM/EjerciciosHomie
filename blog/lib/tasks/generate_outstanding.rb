namespace :generate_outstanding do
  task generate_2_outstanding: :environment do
    mercado_libre = ListingProvider.create(name: "mercado_libre")
  
    home1 = Home.create(title: "Nuevo depa1", price: 12_000)
  
    publish1_xml = {
      title: home1.title,
      listing_type_id: :gold_premium,
      price: home1.price
    }.to_s
  
    home2 = Home.create(title: "Nuevo depa2", price: 13_000)
    publish2_xml = {
      title: home2.title,
      listing_type_id: :gold_premium,
      price: home2.price
    }.to_s

    home3 = Home.create(title: "Nuevo depa3", price: 13_000)
    publish3_xml = {
      title: home3.title,
      listing_type_id: :silver,
      price: home3.price
    }.to_s

    home4 = Home.create(title: "Nuevo depa4", price: 13_000)
    publish4_xml = {
      title: home4.title,
      listing_type_id: :gold,
      price: home4.price
    }.to_s

    home5 = Home.create(title: "Nuevo depa5", price: 13_000)
    publish5_xml = {
      title: home5.title,
      listing_type_id: :silver,
      price: home5.price
    }.to_s

    home6 = Home.create(title: "Nuevo depa6", price: 13_000)
    publish6_xml = {
      title: home6.title,
      listing_type_id: :silver,
      price: home6.price
    }.to_s

    Home::Listing.create(home: home1, publish_xml_or_response: publish1_xml, listing_name: "mercado_libre")
    Home::Listing.create(home: home2, publish_xml_or_response: publish2_xml, listing_name: "mercado_libre")
    Home::Listing.create(home: home3, publish_xml_or_response: publish3_xml, listing_name: "mercado_libre")
    Home::Listing.create(home: home4, publish_xml_or_response: publish4_xml, listing_name: "mercado_libre")
    Home::Listing.create(home: home5, publish_xml_or_response: publish5_xml, listing_name: "mercado_libre")
    Home::Listing.create(home: home6, publish_xml_or_response: publish6_xml, listing_name: "mercado_libre")

    Home::Listing::Outstanding.create(home: home1, listing_provider: mercado_libre, _outstanding_type: :gold_premium)
    Home::Listing::Outstanding.create(home: home2, listing_provider: mercado_libre, _outstanding_type: :gold)
    Home::Listing::Outstanding.create(home: home3, listing_provider: mercado_libre, _outstanding_type: :gold_premium)
    Home::Listing::Outstanding.create(home: home4, listing_provider: mercado_libre, _outstanding_type: :gold_premium)
    Home::Listing::Outstanding.create(home: home6, listing_provider: mercado_libre, _outstanding_type: :gold)
  end
end
