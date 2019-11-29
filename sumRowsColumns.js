function max_sum_rows_collums(numbers) {
  sums = []
  transposedNumbers = numbers[0].map((col, i) => numbers.map(row => row[i]));

  numbers.forEach(element => {
    sums.push(element.reduce((previousNumber, nextNumber) => previousNumber + nextNumber));
  });
  transposedNumbers.forEach(element => {
    sums.push(element.reduce((previousNumber, nextNumber) => previousNumber + nextNumber));
  });
  maximum = sums.reduce((firstNum, secondNum) => {return Math.max(firstNum, secondNum);});
  return maximum;
}


numbers =
  [
    [6, 7, 8],

    [1, 4, 29],

    [4, 78, 12]
  ]
console.log(max_sum_rows_collums(numbers));
