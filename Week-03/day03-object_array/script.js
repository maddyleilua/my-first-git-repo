console.log("HELLLLLOOOOOO");

const person = {
  firstName: "Mad",
  lastName: "Lei",
};

// !MODIFYING IS OKAY
// Assignment operator (=)
// Assigning a new property name
person.firstName = "Max";

// assigning new property
person.favouriteColor = "Purple";

// deleting a property
delete person.lastName;
console.log(person);

// cannot reassign the entire const vairable to a new object
// person = { newProp: "New Value" };
// !script.js:19 Uncaught TypeError: Assignment to constant variable.

// Property contain the key and the value
// dog
const fido = {
  name: "Fido",
  weight: 40,
  breed: "Mixed",
  loves: ["walks", "fetching balls"],
};
console.log(fido);

// ! Exercise 1 -- cat

const cat = {
  name: "Gray",
  weight: "10-15 pounds",
  breed: "Chartreux",
  favFood: "Fish",
};
console.log(cat);

// Dot and notations
console.log(cat.name);

// ! Exercise 2
console.log(`My cats favourite food is ${cat.favFood}`);

// objectName["propertyName"];

cat["name"];

// Example showing if there is a space to use quotation marks
let address = {
  "street no": 115,
  street: "Queen Street",
  suburb: "Auckland CBD",
  city: "Auckland",
};
console.log(address);

const property = "name";
const hero = {
  name: "Batman",
};

hero["name"];
hero[property];

// Both of these below code the same thing, Batman
console.log(hero.name);
console.log(hero["name"]);

// ! Exercise 3

let rectangle = {
  length: 10,
  width: 50,
};

const area = rectangle["length"] * rectangle["width"];
console.log(`The area of the rectangle is ${area}`);
// console.log(rectangle.length * rectangle.width);

// ! Exercise 4
const NewPerson = {
  firstName: "Caleb",
  lastName: "Singh",
  favouriteNumber: 15,
  favouriteDay: "Tuesday",
};

NewPerson.favFood = "Chick Nibbles";
console.log(NewPerson);

delete NewPerson.favouriteDay;
NewPerson.favouriteNumber = NewPerson.favouriteNumber * 2;

console.log(NewPerson);

// data types - arrays

// const arrayName = [item1, item2, ...]

const fruits = [
  "apples",
  "oranges",
  "peaches",
  "grapes",
  "lemons",
  "mango",
  "banana",
];
console.log(fruits);

const mountains = ["Everest", "Fuji", "Taranaki"];
console.log(mountains[0]);
console.log(mountains[1]);
console.log(mountains[2]);

mountains[2] = "Caleb";
console.log(mountains);

const names = ["Gracie", "Caleb", "Saphron"];
names.length; // the length of names is 3
console.log(names.length);

// ! Exercise 2
const numbers = [5, 6, 7, 8, 9, 10];
// average = total sum / number of items

// total sum
const total =
  numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];
console.log(total);

// number of items
console.log(numbers.length);

// average
console.log(total / numbers.length);

// Push () method
const pokeballs = ["pikachu", "tyran", "blissy"];
console.log(pokeballs);

pokeballs.push("tinkta");
console.log(pokeballs);

// ! Exercise 3
const recipe = {
  title: "Recipe for something sweet",
  servings: 2,
  ingredients: ["flour", "milk", "chocolate"],
};
console.log(recipe.ingredients.length);
recipe.ingredients.push("sugar");
console.log(recipe);
