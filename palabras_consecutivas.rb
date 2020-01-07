def consecutive? (words)
  comparison = []
  words.each do |word|
   comparison.push(word[0].next.eql?(word[1]))
  end
  comparison.inject(:&)
end
puts consecutive?(["AB", "BC", "CD"]) #true
puts consecutive?(["AB", "EC", "CD"]) #false
puts consecutive?(["AC", "BC", "CD"]) #false