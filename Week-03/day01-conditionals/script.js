console.log("hello world");

// if (truthy value {
// run something here
// })

if (1 === 1) {
  console.log("The condition is true");
}

// statements continued
let x = 1;

if (x > 1) {
  console.log("x is greater than 1");
} else if (x === 1) {
  console.log("x is 1");
} else {
  console.log("x is less than 1");
}

// !exercise 1 --
let variable = 18;

if (variable > 0) {
  console.log("Variable is positive");
} else if (variable === 0) {
  console.log("variable is 0");
} else {
  console.log("variable is negative");
}

// !Exercise 2
let myString = "1 apple";
console.log(myString);
console.log(myString[0]);

// Ternary operator
const word = "apple";
word[0] === "a" ? console.log(true) : console.log(false);

// traditional 'if else' statement
if (word[0] === "a") {
  console.log(true);
} else {
  console.log(false);
}

// !Exercise 3
const word2 = "hippopotamus";

if (word2.length > 200) {
  console.log("The word is long");
} else {
  console.log("The word is NOT long");
}

// Logical operators
// The AND operator &&

let isSunny = true;
let temperature = 28;

if (isSunny && temperature > 25) {
  console.log("Tis is hot and sunny 🌞");
} else {
  console.log("Tis is not hot and sunny ☔");
}

// The OR operator ||

let hasPremiumSub = false;
let hasFreeSub = true;

if (hasPremiumSub || hasFreeSub) {
  console.log("You have Premium");
} else {
  console.log("Upgrade to Premium Sub to get full access");
}

// Evaluation order
let m = 4;
let y = 2;
let z = 0;

if (m == 4 && (!(y == 1) || z == 0)) {
  console.log("it is true");
} else {
  console.log("It is not true");
}

// !Exercise 4
let elderly = 60;
let Premium = false;
let coupon = true;

if (elderly >= 65 && (Premium || coupon)) {
  console.log("You have premium");
} else {
  console.log("You dont have premium");
}

// exercise 4 convert into a ternary
elderly >= 65 && (Premium || coupon)
  ? console.log("Premium")
  : console.log("Not Premium");

// Switch statement
let fruit = "strawberry";

switch (fruit) {
  case "orange":
    console.log("The fruit is 🍊");
    break;
  case "strawberry":
    console.log("The fruit is 🍓");
    break;
  case "banana":
    console.log("The fruit is 🍌");
    break;

  default:
    console.log("Fruit not found 🙈");
}

// !exercise 5
let DayofWeek = "Sunday";

switch (DayofWeek) {
  case "Monday":
    console.log("It is WORK DAY 🙈");
    break;
  case "Tuesday":
    console.log("It is WORK DAY 🙈");
    break;
  case "Wednesday":
    console.log("It is WORK DAY 🙈");
    break;
  case "Thursday":
    console.log("It is WORK DAY 🙈");
    break;
  case "Friday":
    console.log("It is WORK DAY 🙈");
    break;

  case "Saturday":
    console.log("It is the WEEK END 🥳");
  case "Sunday":
    console.log("It is the WEEK END 🥳");
}

// homework exercise

let grade = 70;
let letterGrade;

switch (true) {
  case grade >= 100:
    letterGrade = "Not valid grade";
    break;
  case grade >= 90:
    letterGrade = "A";
    break;
  case grade >= 80:
    letterGrade = "B";
    break;
  case grade >= 70:
    letterGrade = "C";
    break;
  case grade >= 60:
    letterGrade = "D";
    break;
  case grade >= 0:
    letterGrade = "F";
    break;

  default:
    letterGrade = "Not valid grade";
}
console.log(`Your letter grade is: ${letterGrade}`);
