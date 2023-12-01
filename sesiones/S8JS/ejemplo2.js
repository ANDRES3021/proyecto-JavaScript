var title = document.getElementById('title');

var input = document.getElementById('text');
input.addEventListener("input", function(event) {
    title.textContent = event.target.value;
  });
