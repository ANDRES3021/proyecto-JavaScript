function calculateAverage(numbers) {
    var sum = 0;
  
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]; 
    }
    var result = sum / numbers.length;
   
    
    return result;
  }
  var input = [2, 3, 4, 5, 6];
  console.log(calculateAverage(input));
  
