console.log("Hello world 😃");
// String
const str1 = "Hello";
const str2 = 'hello';
const str3 = `hello`

// enclosing quotation marks
const someMessage = "It's six o'clock";
const anotherMessage = 'Remember to say "please" and "thank you".'

// Escape character
const str4 = 'It\'s a great day!'
const str5 = "He said, \"hello!\""

// Escaping characters with special characters
const multilineStr = "Line 1\nLine2"; 
console.log(multilineStr);

const tabbedStr = "Name:\tJane";
console.log(tabbedStr);

const path = "C:\\Program Files\\App";
console.log(path);

// template literals
const multilineString = `This is line one 
This 
is 
line 
two`
console.log(multilineString);

// String interpolation
const myName = "Maddy";
const greeting = `Hello, ${myName}`;
console.log(greeting);

// concatenating strings
const myName2 = 'Peach';
const greeting2 = 'Hello, ' + myName2 + '!';
console.log(greeting2);

// string lengths
const myMessage = "Teapot";
console.log(myMessage.length);

// selecting a specific character of string
console.log(myMessage[0]);

// exercise
const exercise = `"Concentrate all your thoughts `
console.log(exercise);
const exercise1 = 'upon the work in hand. The sun\'s rays do not burn '
console.log(exercise1);
const exercise2 = "until brought to a focus.\""
console.log(exercise2);
const exercise3 = `
- Alexander Graham Bell`
console.log(exercise3);

const exercisefinal = exercise + exercise1 +exercise2 + exercise3
console.log(exercisefinal);
console.log(exercisefinal.length);


// exxercise 1
const bmi = "Calculate Buddy's BMI: "
const weight = 100;
const height = 1.83;
console.log( bmi + weight/(height*height));

// exercise 2
const book = 5;
const total = 10;
const totalbook = "Buddy and Sally spent a total of $" + (book * total) + " at the Bookstore 😃";
console.log(totalbook);