//Basic calculation
let a = 10;
let b = 5;

// Addition
console.log(a + b);
// Subtraction
console.log(a - b);
// Multiplication
console.log(a * b);
// Division
console.log(a / b);
// exposentiation (10 to the power of 5)
console.log(a ** b);
// remainder of the division (5 fits into 10 twice without any remainders)
console.log(a % b);

// increment operator
a++; // a = a + 1

console.log("Increase operator:", a);

// decrease
b--; // b = b - 1

console.log("Decrease operator:", b);

// addition increment operator
// a = a + 220
a += 220; //220 + 11
console.log("Addition Increment operator: " + a);

// BigInt
let largeNumber = 9999999999999999; // 16 times
console.log(largeNumber); // 10000000000000000

let bigInt = 9999999999999999n; // n at the end means its a bigint
console.log(bigInt);

console.log(typeof largeNumber); //number
console.log(typeof bigInt); //bigint

// boolean

console.log(Boolean("Hello!")); //true
console.log(Boolean(" ")); //true
console.log(Boolean("")); //false
console.log("==== Boolean for Number ====");
console.log(Boolean(1)); //true
console.log(Boolean(-1)); //true
console.log(Boolean(0)); //false
console.log("==== Boolean for Falsy Value ====");
console.log(Boolean(undefined)); //false
console.log(Boolean(false)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false NaN = Not A Number

// string to number method

const str = "42";

const num1 = Number(str);
console.log(num1, typeof num1);

const num2 = parseInt(str);
console.log(num2, typeof num2);

// unary plus + operator
const num3 = +str; //preferred method of converting string to number
console.log(num3, typeof num3);

// NaN - Not a Number
const str1 = "Hello";
console.log(Number(str1)); //NaN
console.log(parseInt(str1));
console.log(+str1);

console.log(10 == 10);
console.log(10 == "10");
console.log(10 != 4);

// ! Not an operator
const booleanValue = true;
console.log(booleanValue, !booleanValue);

console.log(!false); //becasue false is false, the ! output makes it true
// boolean(false) => false
// NOT false => true
console.log(!"Hello"); // because hello is true, the ! output is now false
console.log(!0); //becasue the 0 is false, the ! output is now true

const userInput = 0;

if (!userInput) {
  // run code here
}
