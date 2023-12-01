Programación funcional
La programación funcional es un paradigma declarativo, es decir, se enfoca en el qué se desea lograr sin preocuparse mucho en el cómo
Programacion no imperativa si no programacion declarativa
Como ejemplo el uso del metodos internos como el map()
Inmutabilidad
Decimos que algo es mutable cuando puede ser cambiado o modificado
Por lo tanto, inmutable es algo que no puede ser alterado
Para llevar este concepto a la práctica es importante siempre preferir crear una nueva variable en lugar de intentar modificar la original. Esto se puede llevar a cabo con métodos como map() que no altera el arreglo original, o bien creando tus propias funciones inmutables.

Funciones puras
Para que una función pueda ser considerada pura debe cumplir dos reglas:
El valor retornado siempre es el mismo cuando se da el mismo valor de entrada.
No debe producir side effects (efectos secundarios).
Los side effects son un término más amplio que el anterior. A grandes rasgos significa modificar algo fuera de la función. Algunos ejemplos:
Mutar los parámetros que recibe una función como en el Ejemplo 1.
Modificar cualquier variable fuera de la función.
Llamadas a una API.
console.log() 





