var title = document.getElementById('title');

var redButton = document.getElementById('red');

var blueButton = document.getElementById('blue');

var blackButton = document.getElementById('black');
redButton.addEventListener("click", function() {
    title.style = "color: red;";
  });
  
  blueButton.addEventListener("click", function() {
    title.style = "color: blue;";
  });
  
  blackButton.addEventListener("click", function() {
    title.style = "color: black;";
  });