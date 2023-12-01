function calculateAge(birthYear) {
    var age = 2020 - birthYear;
    return age;
}

var ageJohn = calculateAge(1995);

console.log(ageJohn); // 25

function yearsUntilRetirement(year, name) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(name + ' retires in ' + retirement + ' years.');
}
yearsUntilRetirement(1995, 'John Doe');
// John Doe retires in 40 years.
