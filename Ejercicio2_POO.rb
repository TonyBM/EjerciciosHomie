class Contact
  attr_reader :people
  @people = {}
  @people['Jose'] = {name: 'Jose Lopez', age: 20, gender: :masculino}
  @people['Oscar'] = {name: 'Oscar Perez', age: 21, gender: :masculino}
  @people['Martha'] = {name: 'Martha Sanchez', age: 22, gender: :femenino}

  def self.all
    @people
  end

  def self.find_by(attribute, value)
    @people.select { |key, hash_value| hash_value[attribute] == value }
  end

end
puts Contact.find_by(:age, 20)
