require 'date'

def each_month(initial_date, final_date, day)
  start_date = Date.new(initial_date.year, initial_date.mon, day)
  end_date = Date.new(final_date.year, final_date.mon, day)
  array_dates =[start_date.to_s]
  new_date = start_date.next_month

  while((new_date <=> end_date) <= 0)
    new_date = aux_date.next_month
    array_dates << new_date.to_s
  end

  array_dates
end
print each_month(Date.new(2018, 1, 3), Date.new(2018, 05, 05), 4)