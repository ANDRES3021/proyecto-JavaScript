var Vec = function(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Vec.prototype.plus = function(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }
  
  Vec.prototype.minus = function(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }
  
  Vec.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  
  var vec1 = new Vec(1, 2);
  var vec2 = new Vec(2, 3);
  
  console.log(vec1.plus(vec2)); 
  console.log(vec1.minus(vec2));
  console.log(vec1.length());

  