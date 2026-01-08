function addNumbers(a,b){
    return a + b;
}
let total=addNumbers(20,10);
//console.log(total)

function subtractNumbers(a,b){
    let totalSum= a-b;
    //console.log(totalSum);

}
subtractNumbers(200,100)

fruitsArray=['mango', 'cherry', 'guava']
for(i=0; i<fruitsArray.length; i++){
    //console.log(fruitsArray[i])
}

var multiply =(x,y) =>{
    return x * y;
}
let result=multiply(5,4);
console.log(result)

var addTwoNumbers =(x,y) => x + y;
let sum=addTwoNumbers(15,25);
console.log(sum)

var greet = name => `Hello, ${name}!`;
let message = greet('Alice');
console.log(message);

var getRandomNumber = () => Math.random();
let randomNum = getRandomNumber();
console.log(randomNum);

var square = n => n * n;
let squaredValue = square(6);
console.log(squaredValue);

var logMessage = () => {
    console.log('This is a log message from an arrow function.');
}
logMessage();

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(n => n * 2);
console.log(doubledNumbers);

let names = ['John', 'Jane', 'Doe'];
let uppercasedNames = names.map(name => name.toUpperCase());
console.log(uppercasedNames);

let factorial = n => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
let factOf5 = factorial(5);
console.log(factOf5);

var isEven = n => n % 2 === 0;
console.log(isEven(4));
console.log(isEven(7));     

var concatenate = (str1, str2) => str1 + ' ' + str2;
let combinedString = concatenate('Hello', 'World');
console.log(combinedString);

var getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
let fullName = getFullName('Jane', 'Doe');
console.log(fullName);

var calculateArea = (length, width) => length * width;
let area = calculateArea(5, 10);
console.log(area);

var findMax = (a, b) => (a > b ? a : b);
let maxNumber = findMax(10, 20);
console.log(maxNumber);


var reverseString = str => str.split('').reverse().join('');
let reversed = reverseString('hello');
console.log(reversed);

var filterEvenNumbers = arr => arr.filter(n => n % 2 === 0);
let evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(evenNumbers);

