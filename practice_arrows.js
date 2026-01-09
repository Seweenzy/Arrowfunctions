var multiply=(a,b) =>{
    return a * b;
}
let prod= multiply(30,5);
console.log(prod);

var addNumbers=(a,b) => a+b;
let sum= addNumbers(50,20);
console.log(sum)

var greet= name => `Hello,${name}`;
let message= greet('Oluwaseun Kukoyi');
console.log(message)


let numbers=[1,2,3,4,5];
let doubledNumbers= numbers.map(n=> n*2);
console.log(doubledNumbers);

let names=['Oluwaseun', 'Oluwaseyi', 'Oluwashola', 'Kehinde'];
let uppercasedNames= names.map(name=> name.toUpperCase());
console.log(uppercasedNames)

var getFullName=(firstname, lastname) => `${firstname} ${lastname}`;
let fullName=('Kukoyi Oluwaseun');
console.log(fullName)

var filterEvenNumbers= array => array.filter(n => n % 2 == 0);
let evenNumbers=filterEvenNumbers([1,2,3,4,5,6,7,8,9,10]);
console.log(evenNumbers)
