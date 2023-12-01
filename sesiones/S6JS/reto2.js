function compact(array) {
    return array.filter(function(element) {
      return !!element;
    });
  }
  
  var array = [0, 1, false, 2, '', 3];
  var compactedArray = compact(array);
  
  console.log(compactedArray); 
