// Input: 12345

//  -- 1 + 2 + 3 + 4 + 5 = 15

// Output: 15
var number = 12345;

// var string = number.toString();

var array = number.toString().split('');
var arrayOfNumbers = array.map(function(number) {
    return Number(number);
  })
  
var arrayOfNumbers2 = array.map(Number);

var sum = arrayOfNumbers.reduce(function(a, b) {
    return a + b;
  }, 0);
  
  console.log(sum);

  function sumDigits(number) {
    return number
           .toString()
           .split('')
           .map(Number)
           .reduce(function(a, b) {
             return a + b;
           }, 0)
  }
  
  console.log(sumDigits(12345));


console.log(arrayOfNumbers); // [1, 2, 3, 4, 5]

console.log(arrayOfNumbers2); // [1, 2, 3, 4, 5]

console.log(number); // 12345
// console.log(string); // '12345'
console.log(array); // ['1', '2', '3', '4', '5']

