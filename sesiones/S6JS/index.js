//Este es un ejemplo de código imperativo

var numbers = [1, 2, 3, 4, 5];
var doubles = [];

for(var i = 0; i < numbers.length; i++) {
	doubles.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]



//Esta es la forma declarativa del mismo código
var numbersD = [1, 2, 3, 4, 5];

var doublesD = numbersD.map(function(numberD) {
	return numberD * 2;
});

console.log(numbersD); // [1, 2, 3, 4, 5]
console.log(doublesDs); // [2, 4, 6, 8, 10]

//Funcion Pura

function add(a, b) {
	return a + b;
}

add(1, 2) // 3

//Funcion inPura
function randomNumber() {
	return Math.floor(Math.random() * 10);
}
// Funciones de primera clase
// En un lenguaje de programación se dice que una función
//  es de primera clase cuando puede ser tratada como cualquier otra variable

var square = function(number) {
	return number * number;
}

var squareOfFour = square(4);

console.log(squareOfFour); // 16


//Funciones de alto orden
// Cuando una función recibe otra función como parámetro
// se le llama de alto orden o de orden superior.
//map(), filter() y reduce()

//map
//aplica una función sobre cada elemento del 
//arreglo. Es importante destacar que no muta el arreglo original
var numbers = [1, 2, 3, 4, 5];
var doubles = numbers.map(function(number) {
	return number * 2;
});

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]

// filter
//crea un nuevo arreglo pero sólo con aquellos ç
//elementos que retornen true por la función que actúa como predicado
var numbers = [1, 2, 3, 4, 5];

var evenNumbers = numbers.filter(function(number) {
	return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

//reduce 
//acumula o reduce todos los elementos a un valor único según la función dada.
var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(accumulator, currentValue) {
	return accumulator + currentValue;
}, 0); // Initial value

console.log(sum); // 15


Joako
  hace 3 días
//Input: 12345

//  -- 1 + 2 + 3 + 4 + 5 = 15

// Output: 15

var number = 12345; //12345

// var string = number.toString(); // '12345'

var array = number.toString().split(''); //['1', '2', '3', '4', '5']



var arrayOfNumbers = array.map(function(number) {

    return Number(number);
})


var arrayOfNumbers2 = array.map(Number);


var sum = arrayOfNumbers.reduce(function(a, b ){

return a + b ;
}, 0 );




console.log(sum);

function sumDigits(number){

    return number
      .toString()
      .split('')
      .map(Number)
      .reduce(function(a,b){
        return a+ b;
      }, 0)
}

console.log(sumDigits(12345));


console.log(arrayOfNumbers); // [1, 2, 3, 4, 5]
console.log(arrayOfNumbers2); // [1, 2, 3, 4, 5]

console.log(number); // 12345
// console.log(string); // '12345'
console.log(array); // ['1', '2', '3', '4', '5']