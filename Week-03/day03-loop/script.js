console.log("hello world");

// "For" loop
// initalExpression; conditionExpression; IncrementExpression)
// for (let i = 1;     i <= 5;     i++) {
// console.log(i);
// }

// 1-10
// for (let i = 1;     i <= 10;     i++) {

//     console.log(i);

// }

// 10-1
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// let a = 10;
// console.log(a);

// {
//   let a = 11;
//   console.log(a);
// }

const myString = "Responsiveness";
console.log(myString[0]);
console.log(myString.length);

for (let index = 0; index < myString.length; index++) {
  //   console.log(index);
  console.log(myString[index]);
}

// exercise 4
const foods = ["chocolate", "milk", "cookies", "gummies", "caramel"];
console.log(foods);

for (let index = 0; index < foods.length; index++) {
  console.log(`I looovveee ${foods[index]}`); //comment with loop of foods
}

for (const food of foods) {
  console.log(food); //Just loop the foods
}

for (const food of foods) {
  //shorthand for loop and foods
  console.log(`I really love ${food}`);
  if (food === "chocolate") {
    console.log(`I especially love ${food} 😍`);
  }
}

const breakfasts = ["eggs", "bacon", "grits", "sausage"];

for (const item of breakfasts) {
  console.log(`I like ${item} 🤤`);
}

// exercise 6
const numberArray = [7, 13, 26, 49, 55];
let sum = 0;
// sum = sum + 7;
// sum = sum + 13;
// sum = sum + 26;
// sum = sum + 49;
// sum = sum + 55;
// console.log(sum);

for (const number of numberArray) {
  sum = sum + number;
  console.log(`number is ${number}, sum is ${sum}`);
}

console.log(sum);

// let count = 1;
// while (count <= 5) {
//   console.log(`Count is: ${count}`);
//   count++; // after increment -> check condition
// }

/**
 * 1️⃣initial;
 * while ( 2️⃣condition; ){
 *
 *     4️⃣loop body: execution part
 *     3️⃣increment
 * }
 *
 * The order of loop process:
 * 1️⃣2️⃣4️⃣
 * 3️⃣-2️⃣4️⃣
 * 3️⃣-2️⃣4️⃣
 * 3️⃣-2️⃣4️⃣
 * 3️⃣-2️⃣4️⃣
 * ...
 * 3️⃣-2️⃣ STOP
 */

const NumArr = [7, 13, 26, 49, 55];
console.log(NumArr[0]);

let i = 0;
let total = 0;
// sum = sum + 7;
// sum = sum + 13;
// sum = sum + 26;
// sum = sum + 49;
// sum = sum + 55;

while (i <= 4) {
  console.log(NumArr[i]);
  total = total + NumArr[i];
  i++;
}

console.log(`The sum of Number Array is ${sum}`);

// CONTINUES AND BREAKS
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

let x = 0;

while (true) {
  if (x === 3) {
    console.log("X is now 3");
  }
  if (x === 10) {
    console.log("x is now 10");
  }
  if (x === 15) {
    console.log("x is now 15, goodbye");
    break;
  }
  x++;
}

// !Exercise 8
// const myString2 = "Hell@the#e";
// for (let i = 0; i < myString2.length; i++) {
//   //   console.log(myString2[i]);
//   if (myString2[i] === "!" || myString2[i] === "@" || myString2[i] === "#") {
//     console.log(`Error! Found a symbol ${myString2[i]}`);
//     break;
//   }
//   console.log(myString2[i]);
// }

// while (true) {
//   if ((myString2[i] = "Hell")) {
//     console.log("String has no variables");
//   }
//   if ((myString2[i] = "@")) {
//     console.log("Error theres a symbol");
//     break;
//   }
//   if ((myString2[i] = "the")) {
//     console.log("String has no symbols");
//   }
//   myString2++;
// }

// !Exercise 9
const newString = "H!ello# Wo$rld";
let word = "";
// word = word + "H";
// word = word + "e";
// word = word + "l";
// word = word + "l";
// word = word + "o";
// word = word + "";
// word = word + "W";
// word = word + "o";
// word = word + "r";
// word = word + "l";
// word = word + "d";

for (let i = 0; i < newString.length; i++) {
  if (
    newString[i] === "!" ||
    newString[i] === "@" ||
    newString[i] === "#" ||
    newString[i] === "$"
  ) {
    continue;
  }
  word += newString[i];
  console.log(newString[i]);
}

console.log(`The word is ${word}`);
