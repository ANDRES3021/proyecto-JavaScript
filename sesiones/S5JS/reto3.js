var Triangle = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  
  Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
  }