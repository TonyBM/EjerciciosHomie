require 'set'
def count_interseccions(ranges)
  
  combinations = ranges.combination(2).to_a
  count = 0
  combinations.each do |pair|
    count += 1 if pair_intersects?(pair)
  end
  count
end
def pair_intersects?(pair)
  first_range = pair[0]
  second_range = pair[1]
  return false if first_range[0] >= second_range[1]
  return false if first_range[1] <= second_range[0]
  true
end
puts count_interseccions([[40, 85], [10, 60], [60, 160]])
puts count_interseccions([[10, 20], [5, 15], [99, 100], [16, 18]])
puts count_interseccions([[1, 20], [5, 40], [2, 15], [6, 50], [51, 60], [6, 41]])
