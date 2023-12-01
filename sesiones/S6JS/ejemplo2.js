// Funciones puras

function addColor(car) {
    var newCar = Object.assign({}, car, {
      color: 'Black'
    });
  
    return newCar;
  }
  var cart = [
    {
      item: 'Laptop',
      quantity: 1
    }
  ]

  function addItemToCart(item, quantity){
  cart.push({
    item: item,
    quantity: quantity
  })
  }

  function addItemToCartFp(cart, item, quantity){
    var newCart = cart.map(function(element){
    return element;
    })

    newCart.push({
        item: item,
        quantity: quantity
      })
      return newCart;
  }

  //Como map() crea un nuevo arreglo lo podemos usar para crear una copia retornando el parámetro que recibe sin modificarlo.
  cart = addItemToCartFp(cart, 'Phone', 1);

  console.log(cart);


  // Mutable funcion no pura
  cart = addItemToCart(cart, 'Phone', 1);

  console.log(cart);