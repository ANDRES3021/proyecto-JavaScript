// window.addEventListener("click", function() {
//     console.log("Hello world!")
// })

// Eventos y nodos de DOM
var button = document.querySelector("button");

// button.addEventListener("click", () => {
//     console.log("Button clicked.")
// })

// function once(){
//     console.log("Click once")
//     button.removeEventListener("click", once);
// }

// button.addEventListener("click", once)

//Event Object


button.addEventListener("mousedown", function(event){
    if (event.button == 0) {
        console.log("Left button");
      } else if (event.button == 1) {
        console.log("Middle button");
      } else if (event.button == 2) {
        console.log("Right button");
      }

})