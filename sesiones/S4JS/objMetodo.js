var jhon = {
    firstName: 'Jhon',
    lastName: 'Doe',
    birthYear: 1990,
    calculateAge: function(bithYear){
        var today = new Date();
        var year = today.getFullYear();
        return year - bithYear;
    } 

}
console.log(jhon.calculateAge(1990));