class Car
  def initialize
    @turned_on = false
    @on_trip = false
  end
  def turn_on
    puts "The engine is being turned on"
    @turned_on = true
  end
  def start_trip
    raise StandardError unless @turn_on

    puts "The trip has started"
    @on_trip = true
  end
  def end_trip
    raise StandardError unless @on_trip
    
    puts "The trip has ended"
    @on_trip = false
  end
end