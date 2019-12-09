def merge_words(words, limit)
  words_merged = words.join
  words_merged.chars.each_slice(limit).map(&:join)
end
puts merge_words( %w(hola este es un nuevo mensaje), 4)
