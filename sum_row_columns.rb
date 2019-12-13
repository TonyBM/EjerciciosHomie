# frozen_string_literal: true

def maximo_suma(matrix)
  sums = []

  matrix.each { |row| sums << row.sum }
  matrix.transpose.each { |row| sums << row.sum }

  sums.max
end

a = [

  [6, 7, 8],

  [1, 4, 29],

  [4, 78, 12]

]
p maximo_suma(a)
