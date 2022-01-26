// This is a variable with my name.
let myName = 'Reid';
// const variable with an age.
const States = 50;
// this a variable that calculates 5 + 4.
let result = 5 + 4;

function sayHello(word) {
    alert(word)
}

sayHello('Hello World');

function checkAge(name, age) {
    if (age < 21)
        alert("Sorry " + name + " you aren't old enough to view this page")
}

// Charles who is 21, Abby who is 27, James who is 18, and John who is 17.

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let vegetables = ['greens', 'beans', 'potatoes', 'tomatoes']

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

let pet = {
    name: 'Sasu',
    breed: 'Crab'
}

// dot notation

console.log(pet.name)

let people = [
    {
        name: 'Joe',
        age: 17
    },
    {
        name: 'Ashley',
        age: 23
    },
    {
        name: 'Bob',
        age: 20
    },
    {
        name: 'Molly',
        age: 22
    },
    {
        name: 'Andy',
        age: 19
    }
];

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age)
}

function getLength(word) {
    return word.length
}

let wordLength = getLength("Hello World");

if (wordLength % 2 == 0) {
    console.log('The world is nice and even!')
}
else {
    console.log('The world is an odd place!')
}