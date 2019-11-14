def multiplicacionElementos(numbers)
  numbers.each_index do
    |index|
    listWithoutNumber = numbers.reject{|element| element == numbers[index]}

  end
end
multiplicacionElementos([1,2,3,4])