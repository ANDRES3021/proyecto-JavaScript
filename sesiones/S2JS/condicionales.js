// if ( /* Condición a evaluar */) {
// 	/* Código a ejecutar si la condición retorna true */
// } else {
// 	/* Código a ejecutar si la condición retorna false */
// }

// if - La palabra clave que indica que se va a realizar una condicional.
// ( ... ) - Dentro de los paréntesis se coloca la condición a evaluar, la cuál retorna un booleano, es decir, true o false.
// { ... } - Dentro de las llaves va el texto a ejecutar en caso de que la condición sea true.
// else - Se utiliza para controlar el flujo en caso de que la condición sea false. Si se usa else, el código dentro de las llaves que le siguen se ejecuta sólo cuando la condición anterior no se cumplió
// var time = 13;
// var greeting;

// if (time < 12) {
//   greeting = "Good morning";
// }

// if (time < 20) {
//   greeting = "Good afternoon";
// }

// if (time >= 20) {
//   greeting = "Good evening";
// }

// console.log(greeting) // Good afternoon

// var time = 13;
// var greeting;

// if (time < 12) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good afternoon";
// } else if (time >= 20) {
//   greeting = "Good evening";
// }

// console.log(greeting) // Good 

// reto1 
var time = 25;
var greeting;

if (time >= 0 && time < 12) {
  greeting = "Good morning";
} else if (time >= 12 && time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20 && time < 24) {
  greeting = "Good evening";
} else {
    greeting = "invalid time"
}

console.log(greeting) // Good 
