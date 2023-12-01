var car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2020
}
// mutable
// function addColor(car){
//     car.color = "Black";
//     return car;
// }

function addColor(car){
    var newCar = Object.assign({}, car, {
        color: 'Black'
    })
    return newCar;
}

console.log('Before calling addColor()', car);

//Mutable primera parte del ejemplo
// var sameCar = addColor(car);

//InMutable creamo un nuevo objeto sin modificar el objeto car se crea un copia de car
var newCar = addColor(car);

console.log('After calling addColor()', car);

// console.log('After calling addColor()', sameCar);

console.log('After calling addColor()', newCar);

console.log('Same car?', car === newCar); 
