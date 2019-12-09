def ref_object_touch(record)
  return true if Setting.get('import_mode')

  member_ids = getMemberId(record)
  member_ids += touch_organization(record)
  touch_costumer(member_ids)

  true
end

def get_member_id(record)
  organization_id_changed = record.saved_changes['organization_id']

  return [] unless organizationID_valid(organization_id_changed)
  return [] unless user_quantity_valid(organization_id_changed[0])

  organization = Organization.find(organization_id_changed[0])
  organization.touch
  member_ids = organization.member_ids

  member_ids
end

def user_quantity_valid(parameter)
  User.where(organization_id: parameter).count < 100
end

def organization_id_valid(organization_id_changed)
  return false if organization_id_changed
  return false if organization_id_changed[0] != organization_id_changed[1]
  return false if organization_id_changed[0]

  true
end

def touch_organization(record)
  return unless record.organization
  return unless user_quantity_valid(record.organization_id)

  record.organization.touch
  record.organization.member_ids
end

def touch_costumer(member_ids)
  member_ids.uniq.each do |user_id|
    next if user_id == record.id

    User.find(user_id).touch
  end
end
