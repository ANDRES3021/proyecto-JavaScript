function flatten(arrays) {
    return arrays.reduce(function(flat, current) {
      return flat.concat(current);
    }, []);
  }
  var arrays = [[1, 2, 3], [4, 5], [6]];
var array = flatten(arrays);

console.log(array);