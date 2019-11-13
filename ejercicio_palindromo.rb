def palindrome?(word)
  word.eql?(word.reverse)
end
print palindrome?("ollo")
print palindrome?("lala")