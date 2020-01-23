def find_words(word, dictionary)
	subword = ""
	words_found = []
	word.each_char do |letter|
		subword.concat(letter)
		next unless dictionary.include?(subword)
		words_found.push(subword)
		subword = ""
	end
	words_found
end

puts find_words("denuevohola", %w[hola de nuevo])
