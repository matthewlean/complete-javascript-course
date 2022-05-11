'use strict';

// 1.33 Functions

// function logger(){
//     console.log('My name is Matthew');
// }

// // calling / running / invoking function 
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num);

// 1.34 Function Declarations vs Expressions 

// Function declaration
// function calcAge1(birthYear){
//     return 2022 - birthYear;
// }
// const age1 = calcAge1(1994);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear){
//     return 2022 - birthYear;
// }
// const age2 = calcAge2(1994);
// console.log(age2);

// 1.35 Arrow Functions 

// const calcAge2 = function (birthYear){
//     return 2022 - birthYear;
// }

// // Arrow Function 
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1994);
// console.log(age3);

// const untilRetirement = (birthYear , firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement}.`
// }

// console.log(untilRetirement(1994, 'Matthew'));
// console.log(untilRetirement(1980, 'Bob'));

// 1.36 Functions Calling other Functions

// function cutFruit(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruit(apples);
//     const orangePieces = cutFruit(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

// 1.37 Reviewing Functions

// const calcAge = function (birthYear){ 
//     return 2022 - birthYear;
// }

// const untilRetirement = function (birthYear , firstName)  {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0){
//         console.log(`${firstName} retires in ${retirement}.`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired.`)
//         return -1;
//     }
   
// }

// console.log(untilRetirement(1994, 'Matt'));
// console.log(untilRetirement(1950, 'Bob'));

// let calcAverage = scores => scores/3;

// let dolphinAve = calcAverage(44+23+71);
// let koalasAve = calcAverage(65+54+49);

// console.log(dolphinAve);
// console.log(koalasAve);

// const checkWinner = function(dolphinAve, koalasAve){
//     if (dolphinAve > koalasAve){
//         console.log(`The Dolpins win with an average of ${dolphinAve}`);
//     } else if (dolphinAve < koalasAve) {
//         console.log(`The Koalas win with an average of ${koalasAve}`);
//     } else{
//         console.log(`It's a draw! both teams have the same score`);
//     }
// }

// checkWinner(dolphinAve,koalasAve );

// // Test 2
// dolphinAve = calcAverage(85+54+41);
// koalasAve = calcAverage(23+34+37);

// checkWinner(dolphinAve,koalasAve );

// 1.39 Introduction to Arrays

const friend1 = 'Jed';
const friend2 = 'Chris';
const friend3 = 'Rich';

const friends = ['Jed','Chris','Rich'];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// First value
console.log(friends[0]);

// Last value
console.log(friends[friends.length-1]);

// Find length 
console.log(friends.length);

// Mutating array
friends[2] = 'Mel';
console.log(friends);

const firstName = 'Matthew';
const matt = [firstName, 'Lean', 2022-1994, friends];

console.log(matt);

// Array test 
const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1,age2,age3);

const ages = [ calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1]) ];
console.log(ages);