function getWelcome(name){
  return () => {return `Hi, ${name}`;}
}

const greetHomie = getWelcome('Homie');
const greetFco = getWelcome('Fco');
console.log(greetFco());
console.log(greetHomie());