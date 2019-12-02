function max_sum_rows_collums(numbers) {
  sums = []
  transposedNumbers = numbers[0].map((col, i) => numbers.map(row => row[i]));

  
  transposedNumbers.forEach(element => {
    sums.push(element.reduce((previousNumber, nextNumber) => previousNumber + nextNumber));
  });
  sums.concat(numbers.map((element) => {return element.reduce((previousNumber, nextNumber) => previousNumber + nextNumber)}));
  sums.concat(transposedNumbers.map((element) => {return element.reduce((previousNumber, nextNumber) => previousNumber + nextNumber)}));
  console.log(sums)
  maximum = sums.reduce((firstNum, secondNum) => {return Math.max(firstNum, secondNum);});
  return maximum;
}


numbers = [
  [6, 7, 8],
  [1, 4, 29],
  [4, 78, 12]
  ];
console.log(max_sum_rows_collums(numbers));
