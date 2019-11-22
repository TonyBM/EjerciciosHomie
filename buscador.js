const peopleNames = ["Pedro", "Maria", "Rosa"];
const animals = ["Caballo", "Oso", "Perro"];
const things = ["Petroleo", "Carne", "Rosca"];

function wordSearcher(term) {
  wordsFound = []
  const includesTerm = (currentValue) => currentValue.toLowerCase().includes(term);

  wordsFound.push(peopleNames.filter(includesTerm));
  wordsFound.push(animals.filter(includesTerm));
  wordsFound.push(things.filter(includesTerm));

  return wordsFound.flat();
}
console.log(wordSearcher("ro"));