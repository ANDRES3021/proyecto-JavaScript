//por el nombre del elemento 
var link = document.body.getElementsByTagName('a')[1];
console.log(link); 

// por la class
var section = document.body.getElementsByClassName("s3")[0];


// por la id
var title = document.getElementById('title');


//por el selector
var section2 = document.body.querySelector('.s2')[1];
var section3 = document.body.querySelector('#s4');

console.log(section)
console.log(section2)
console.log(section3)

//Crear nodos

// document.createElement

var h2 = document.createElement('h2');

console.log(h2)

var text = document.createTextNode("Hello world");

console.log(text);

h2.appendChild(text);

console.log(h2)

//Atributos

var link = document.getElementById('link');

link.href =  "http://google.com"

link.className = "styled-link"

console.log(link);