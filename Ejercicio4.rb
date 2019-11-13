def plusMinus(arr)
  number_elements = arr.size
  positives = 0
  negatives = 0
  zeroes = 0
  
  arr.each do |number| 
    if number.positive? 
      positives = positives.next
    elsif number.negative?
      negatives = negatives.next
    else
      zeroes = zeroes.next
    end
  end
  
  ratio_positives = positives.fdiv(number_elements)
  ratio_negatives = negatives.fdiv(number_elements)
  ratio_zeroes = zeroes.fdiv(number_elements)
  
  puts ratio_positives
  puts ratio_negatives
  puts ratio_zeroes
end

plusMinus([2,3,4,0,-1,-3])