var Person = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
  }
  Person.prototype.calculateAge = function() {
    var today = new Date();
    var year = today.getFullYear();
  
    console.log( year - this.birthYear );
  }
  var john = new Person('John', 1990, 'Developer');

  var mark = new Person('Mark', 1985, 'Teacher');
  
  var jane = new Person('Jane', 1975, 'Designer');

  console.log(john);
  console.log(mark);
  console.log(jane);