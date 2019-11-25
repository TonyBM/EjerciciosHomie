function sumByPoints(numbers){
  let counter = 0;
  let total = 0;

  numbers.forEach(numero => {
	let splitNumbers = numero.split('.');
		numberToSum = parseInt(splitNumbers[counter]);

	if(!isNaN(numberToSum)){
	    total += numberToSum;
	    counter++;
	}
  });

  return total;
}
console.log(sumByPoints(["13.09.2017", "13.aa.2018", "44.09.2018", "13.09.7"]));