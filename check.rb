def _check(record)

  return true if Setting.get('import_mode')

  return true if are_there_changes?

  return erase_last_update if there_is_owner?

  return manage_group_changes if record.changes_to_save['group_id'].present?

  return check_state if record.changes_to_save['state_id'].present?

  record.last_owner_update_at = Time.zone.now
end
def are_there_changes?
  return false unless record.changes_to_save['owner_id'].blank?
  return false unless record.changes_to_save['state_id'].blank?
  return false unless record.changes_to_save['group_id'].blank?

  record.changes_to_save['last_contact_agent_at'].blank?
end
def erase_last_update
  record.last_owner_update_at = nil
  true
end
def there_is_owner?
  record.changes_to_save['owner_id'].present? && record.changes_to_save['owner_id'][1] == 1
end
def change_last_update
  record.last_owner_update_at = nil
  true
end
def manage_group_changes
  group = Group.lookup(id: record.changes_to_save['group_id'][1])
  return true if !group
  return change_last_update if group.assignment_timeout.blank? || group.assignment_timeout.zero?
end
def check_state
  state_ids = Ticket::State.by_category(:work_on).pluck(:id)
  return change_record_update  if !state_ids.include?(record.changes_to_save['state_id'][1])
      
end
def change_record_update
  record.last_owner_update_at = nil
  true
end
   