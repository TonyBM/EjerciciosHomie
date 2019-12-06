def count_interseccions(ranges)
  counter = 0
  number_of_ranges = ranges.count
  2.upto(number_of_ranges) do
    range_to_check = ranges.pop
    ranges.each do |range|
      counter += 1 if check_intersecctions(range, range_to_check)
    end
  end
  counter
end
def check_intersecctions(first_range, second_range)
  return false if first_range[0] > second_range[1]

  return false if first_range[1] < second_range[0]

   true
end
puts count_interseccions([[40, 85], [10, 60], [70, 160]])
puts count_interseccions([[10, 20], [5, 15], [99, 100], [16, 18]])
puts count_interseccions([[1, 20], [5, 40], [2, 15], [6, 50], [51, 60], [6, 41]])
