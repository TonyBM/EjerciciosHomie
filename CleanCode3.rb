
def assets(data)

  app_model = self.class.to_app_model

  data[ app_model ] = {} unless !data[ app_model ]
  data[ app_model ][ id ] = initialize_localAtributes(data) unless data[ app_model ][ id ]

  return data unless self['created_by_id']
  
  app_model_user = User.to_app_model
  %w[created_by_id].each do |local_user_id|
    next if !self[ local_user_id ]
    next if data[ app_model_user ] && data[ app_model_user ][ self[ local_user_id ] ]
  
    user = User.lookup(id: self[ local_user_id ])
    next if !user
  
    data = user.assets(data)
  end
  
  data
end
def initialize_localAtributes(data)
  local_attributes = attributes_with_association_ids
  
  local_attributes['object'] = ObjectLookup.by_id(local_attributes['activity_stream_object_id'])
  local_attributes['type']   = TypeLookup.by_id(local_attributes['activity_stream_type_id'])
  
  
  ApplicationModel.assets_of_object_list([local_attributes], data)
  local_attributes
end