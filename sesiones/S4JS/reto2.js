function keyValuePairs(obj) {
    var keys = Object.keys(obj);
    var pairs = [];

    for(var i = 0; i < keys.length; i++) {
      pairs.push( [keys[i], obj[keys[i]]] )
    }

    return pairs;
}
var obj = [ ['Nombre', 'Andres'], ['Apellido', 'Pardo'], ['Edad', '30']];
console.log(keyValuePairs(obj));