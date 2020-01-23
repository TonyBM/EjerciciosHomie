def find_words(word, dictionary)
  words_found = []
  base = 0
  word.each_char.with_index do |item, index|
    (base...index).to_a.each do |start|
      next unless dictionary.include?(word[start.. index])
      words_found.push(word[start.. index])
      base = index
    end
    break if index == word.length
  end
	words_found
end

puts find_words("mundogabodenuevogatohola", %w[hola de nuevo])
puts "----------------------------------"
puts find_words("denuevohola", %w[hola de nuevo])
