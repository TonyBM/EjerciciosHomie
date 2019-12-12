def birthday(s, d, m)
    result = 0
    
    s.each_index do |index| 
      result += 1 if s[index,m].sum == d
    end

    result
end