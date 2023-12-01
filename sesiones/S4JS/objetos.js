var jhon = {
    firstName: 'Jhon',
    lastName: 'Doe',
    birthYear: 1990
}

console.log(jhon.firstName);
jhon.firstName = 'Jane';
console.log(jhon.firstName);

jhon['firstName'] = 'Joe';
console.log(jhon.firstName);
console.log(jhon['lastName']);