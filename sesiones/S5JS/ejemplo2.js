var Person = function(name) {
    this.name = name;
  }
  
  var Developer = function(name, skills, yearsOfExperience) {
      Person.call(this, name);
  
      this.skills = skills;
      this.yearsOfExperience = yearsOfExperience;
  }
  
  var john = new Developer('Andres', 'js', 2);
  
  console.log( john );
