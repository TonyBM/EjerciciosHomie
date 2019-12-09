def compare_results(parameters, indicator)
  a = parameters.select { |key| key > indicator }
  a[a.keys.first]
end
grade_values = {
  0 => 'sin fico',
  10 => 'con poco fico',
  20 => 'con fico regular'
}
puts compare_results(grade_values, 7)
