def multiplicacionElementos(numbers)
  result = []
  numbers.each_index do
    |index|
    listWithoutNumber = numbers.reject{|element| element == numbers[index]}
    number_factor = listWithoutNumber.inject(:*)
    result << number_factor

  end
  result
end
puts multiplicacionElementos([1,2,3,4])