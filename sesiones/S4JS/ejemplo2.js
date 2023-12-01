var car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
  }

  console.log(car)
  
  // [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]  // Resultado esperado

  // [key, value]

  var obj = {
    a: 'some string',
    b: 42,
    c: false
  };
  
  console.log( Object.keys(obj) );  // ['a', 'b', 'c']


function keyValuePairs(obj){

    var keys = Object.keys(obj);
    var pairs = [];


    for(var i = 0; i < keys.length; i++){

     pairs.push([keys[i], obj[keys[i]]])        
    }

  return pairs;
}

var result = keyValuePairs(car);
console.log(result)
  