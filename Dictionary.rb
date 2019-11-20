class Dictionary

  @words = [
    ['departamento', 'department'], 
    ['propietario', 'owner'], 
    ['inquilino', 'tenant'], 
    ['renta', 'rent']
  ]
  @available_languages = ["english", "spanish"]

  def self.translate(word, language)
    raise "Lenguaje Desconocido#{language}" unless @available_languages.include?(language)
    @words.each do |word_couple|
      return translate_word(word_couple, word) if word_couple.include?(word)
    end
    raise "Palabra no reconocida #{word}"
  end

  private
  
  def self.translate_word(array,word)
    array.delete(word)
    array.pop
  end
end

puts Dictionary.translate('renta', 'english')