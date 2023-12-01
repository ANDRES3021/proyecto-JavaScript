Truthy y Falsy

En JavaScript todas las variables contienen un valor booleano, a esto se le conoce como truthy o falsy.

Los siguientes valores siempre son falsy:

- false
- 0
- '' o "" - String vacío
- null
- undefined
- NaN

Todo lo demás es truthy incluyendo los siguientes casos:

- '0' - String conteniendo cero
- 'false' - String con el texto false
- [] - Arreglo vacío
- {} - Objeto vacío
- function(){} - Función vacía

Esto es muy útil a la hora de usar condicionales pues podemos evaluar un sólo valor sin necesidad de operadores lógicos.
if(value) {
	// value es truthy
} else {
	// value es falsy
	// puede ser false, 0, '', null, undefined o NaN
}

Es muy importante tener cuidado cuando se están haciendo comparaciones con == en lugar de === ya que se pueden obtener resultados inesperados, por ejemplo:

[1] === '1' // true

https://dorey.github.io/JavaScript-Equality-Table/