
// switch ( /* Expresión a evaluar*/ ) {
// 	case a:
// 		/* Código a ejecutar */
// 		break;
// 	case b:
// 		/* Código a ejecutar */
// 		break;
// 	default:
// 		/* Código a ejecutar por default */
// }

// switch - La palabra clave que indica que se va a realizar una condicional.
// ( ... ) - Expresión a evaluar.
// case - Expresa uno de los posibles valores como resultado de la evaluación que se está haciendo.
// break - Detiene la ejecución del bloque y sale del switch.
// default - Define qué se debe hacer cuando ninguno de los casos se cumple.

var day = 2;
var text;

switch (day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thursday";
    break;
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    break;
  default:
    text = "Error";

}

console.log(text); // Tuesday








