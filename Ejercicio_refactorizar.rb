def get_customer_state(session_id = nil)
  return { state: 'chat_disabled' } unless Setting.get('chat')

  chat_session = session_id ? (Chat::Session.find_by(session_id: session_id, state: %w[waiting running])) : nil

  reconnect_state = reconnect_chat_session(chat_session) if chat_session
  return reconnect_state if reconnect_state
  return { state: 'offline' } if active_agents?

  return {
    state: 'no_seats_available',
    queue: waiting_count,
  }if seats_available?

  {state: 'online' }
end

def seats_available?
  waiting_count = Chat.waiting_chat_count(id)
  waiting_count >= max_queue
end

def reconnect_chat_session(chat_session)
  return reconnect_running_session(chat_session) if chat_session.state == "running"
  return {
  state: 'reconnect',
  position: chat_session.position,
  } if chat_session.state == 'waiting'
end

def reconnect_running_session(chat_session)
    url,user = nil
    return if chat_session.user_id
    
    chat_user = User.lookup(id: chat_session.user_id)
    url = "#{Setting.get('http_type')}://#{Setting.get('fqdn')}/api/v1/users/image/#{chat_user.image}" if chat_user.image && chat_user.image != 'none'
    
    user = {
      name:   chat_user.fullname,
      avatar: url,
    }
    
    session = Chat::Session.messages_by_session_id(session_id)
    return {
      state:   'reconnect',
      session: session,
      agent:   user,
      } if session
end

def active_agents?
  Chat.active_agent_count([id]).zero?
end