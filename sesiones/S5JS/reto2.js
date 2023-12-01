var Group = function() {
    this.members = [];
  }
  
  Group.prototype.add = function(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }
  
  Group.prototype.has = function(value) {
    return this.members.includes(value);
  }
  
  Group.from = function(collection) {
    var group = new Group();
  
    for(var i = 0; i < collection.length; i++) {
      group.add(collection[i]);
    }
    return group;
  }
  var group = Group.from([1, 2, 3, 4, 5]);
  console.log(group); 
  console.log(group.has(5)); 
  console.log(group.has(10)); 
  
  group.add(10);
  console.log(group.has(10)); 

 