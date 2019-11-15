def sum_without_zeros(numbers)
  sum = 0
  number_to_add = ""

  numbers.each do |number|
    number.digits.each do |digito|
      break if digito.zero?
      number_to_add += digito.to_s
    end
    next if number_to_add.blank?

    sum += number_to_add.reverse.to_i
    number_to_add.clear
  end

  sum
end
puts sum_without_zeros([1200000265, 1000002360, 1670000800, 1000006002, 1000000233])