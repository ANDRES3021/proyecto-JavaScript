String(123);	// Explícito
123 + '';	// Implícito

String(123);	// '123'
String(3.14);	// '3.14'
String(true);	// 'true'
String(false);	// 'false'
String(undefined);	// 'undefined'
String(null);	// 'null'


//Number

Number('123');	// Explícito
+ '123';	// Implícito
1 - '1';	// Implícito
2 * '2';	// Implícito

Number(' 10 ');	// 12
Number('-10');	// 10
Number('123abc');	// NaN
Number(true);	// 1
Number(false);	// 0
Number(null);	// 0
Number(undefined);	// NaN


//Boolean 

Boolean(1);	// Explícito
if(1) { ... }	// Implícito - Contexto lógico
!!2;	// Implícito - Operador lógico
2 || 'Hello World';	// Implícito - Operador lógico