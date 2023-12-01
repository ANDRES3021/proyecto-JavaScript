function loop(start, test, update, body) {
    for (var value = start; test(value); value = update(value)) {
      body(value);
    }
  }
  var test = function(n) {
    return n > 0;
  }
  
  var update = function(n) {
    return n - 1;
  }
  
  loop(3, test, update, console.log);
  