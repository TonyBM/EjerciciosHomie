def steps_to_transform(aspiring_word, objective_word)


  result = tranform_included(aspiring_word, objective_word) if objective_word.include?(aspiring_word)
  result ||= transform_long(aspiring_word, objective_word) if aspiring_word.length >= objective_word.length
  result ||= transform_short(aspiring_word, objective_word) if aspiring_word.length < objective_word.length

  result
end
def tranform_included(word, word_template)
  
end
def transform_long(long_word, short_word)
  long_word.each_char.with_index do |item, index|
    next if long_word[index] == short_word[index]
    short_word[index]? (transform(long_word, short_word, index)): (delete(long_word, index))
  end
  long_word
end
def transform_short (short_word, long_word)
  long_word.each_char.with_index do |item, index|
    next if long_word[index] == short_word[index]
    short_word[index]? (transform(short_word, long_word, index)) : (add(short_word, long_word[index]))
  end
  short_word
end
def add(word, letter)
  puts "add #{letter}"
  word.concat(letter)
end
def delete(word, index)
  puts "delete #{word[index]}"
  word[index] = ""
end
def transform(word, word_template,index)
  puts "transform #{word[index]} to #{word_template[index]}"
  word[index] = word_template[index]
end

#puts "Ejemplo primera palabra mas larga"
#puts steps_to_transform("holamundo", "holemurd")
puts "Ejemplo primera palabra mas corta"
puts steps_to_transform("holemurd", "holamundo")