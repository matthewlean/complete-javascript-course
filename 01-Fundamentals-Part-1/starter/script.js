// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

/* Multi-line comment
let firstName = 'Matt';
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

// Single line comment 
// let country = 'UK';
// let continent = 'Europe';
// let population = 600000000;

// console.log(country + ' ' + continent + ' ' + population);

// commenting 

// true;
// console.log(true);

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "test");

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// javascriptIsFun = 'YES!';
// console.log(javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2022;
// console.log(year);

// console.log(typeof null);

// const now = 2022;
// const ageMatt = now - 1994; 
// const ageAimee = now - 1993;

// console.log(ageMatt, ageAimee);

// console.log(ageMatt * 2, ageMatt / 10, 2 ** 3);

// // 2 ** 3 = 2 to the power of 3

// const firstName = 'Matt';
// const lastName = 'Lean';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10;
// console.log(x);

// x *= 4;

// console.log(ageMatt > ageAimee);

// console.log(ageAimee >= 18);

// const isFullAge = ageAimee >= 18;
// console.log(isFullAge);

// console.log(now - 1991 > now - 2020);

// const now = 2022;
// const ageMatt = now - 1994; 
// const ageAimee = now - 1993;

// console.log(now - 1991 > now - 2020);

// let x, y;
// x = y = 25-10-5;   
// console.log(x,y);

// let markBMI, johnBMI; 

// markBMI = 78 / (1.69 ** 2);
// console.log(markBMI);

// johnBMI = 92 / (1.95 ** 2);
// console.log(johnBMI);

// let markLarger, johnLarger;

// if ( johnBMI > markBMI){
//     console.log('John has a larger BMI than Mark');
//     johnLarger = true;
//     console.log(johnLarger);
// }
// else{
//     console.log('Mark has a larger BMI than John');
//     markLarger = true;
//     console.log(markLarger);
// }

// 1.17

// const firstName = 'Matt';
// const job = 'Web Manager';
// const birthYear = 1994; 
// const year = 2022;

// const matt = "I'm " + firstName + ' a ' + (year - birthYear) + ' year old ' + job + '.';
// console.log(matt);

// const mattNew = `I'm ${firstName}, a ${year - birthYear} year old ${job};
// console.log(mattNew)`;

// console.log(`Just a regular string`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// 1.18

// const age = 15; 
// const isOldEnough = age >= 18; 

// if(isOldEnough){
//     console.log(`Sarah can start driving licence 😀`);
// }
// else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, Wait enough ${yearsLeft} years.`);
// }

// const birthYear = 1990; 
// let century; 

// if ( birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21; 
// }

// console.log(century);

// 1.19 Coding Challenge #2

// let markMass = 78; 
// let markHeight = 1.69; 
// let johnMass = 92;
// let johnHeight = 1.95; 

// let markBMI = markMass / (markHeight ** 2 );
// let johnBMI = johnMass / (johnHeight ** 2 );

// let markHeigherBMI = markBMI > johnBMI; 
// console.log(markBMI, johnBMI, markHeigherBMI);


// if(markHeigherBMI = true){
//     console.log(`Mark's BMI is heigher than Johns'!. Marks BMI is ${markBMI}`);
// } else{
//     console.log(`Johns BMI is heigher than Mark's!. John's BMI is ${johnBMI}`);
// }

// 1.20 Type Conversion

// // type conversion 
// const inputYear = '1991'; 
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');

// console.log('23' - '10' - 3);

// let n = '1' + 1; //11
// n = n - 1; 
// console.log(n); // 10

// 1.21 Truthy Falsy

// console.log(Boolean(0));

// let height;

// if(height){
//     console.log('Height defined');
// } else{
//     console.log('Height undefined');
// }

// 1.22 Equality Operator
// const age = 18;

// if(age === 18) console.log('You became an adult');

// const favourite = Number( prompt("What's your favourite number"));

// console.log(favourite);

// console.log(typeof favourite);

// if (favourite === 23){
//     console.log('Cool 23 is cool');
// } else if ( favourite === 7){
//     console.log('7 is cool');
// } else {
//     console.log("number isn't 23 or 7");
// } 


// if ( favourite !== 23){
//     console.log('Why not 23?');
// }

// 1.24 Logical Operators

// const hasDriversLicense = true; 
// const hasGoodVision = true; 

// console.log(hasDriversLicense && hasGoodVision );
// console.log(hasDriversLicense || hasGoodVision );
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (hasDriversLicense && hasGoodVision){
// //     console.log("Sarah can drive");
// // } else{
// //     console.log("Someone else should drive");
// // }

// const isTired = false;

// console.log( hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired){
//     console.log("Sarah can drive");
// } else {
//     console.log("Someone else should drive");
// }

// 1.25 Coding Challenge #3 

// const dolphinsGame1 = 96;
// const dolphinsGame2 = 108;
// const dolphinsGame3 = 89;

// const dolphinsAve = ( (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) /3 );
// console.log(dolphinsAve);

// const koalasGame1 = 88;
// const koalasGame2 = 91;
// const koalasGame3 = 110;

// const koalasAve = ( (koalasGame1 + koalasGame2 + koalasGame3) /3 );
// console.log(koalasAve);

// if (koalasAve > dolphinsAve && koalasAve > 100){
//     console.log(`The Koala's average score of ${koalasAve} is greater than the dolphins average of ${dolphinsAve}.`);
// } else if (koalasAve < dolphinsAve && dolphinsAve > 100) {
//     console.log(`The Dolphin's average score of ${dolphinsAve} is greater than the Koala's average score of ${koalasAve}.`)
// } else if (koalasAve === dolphinsAve > 100){
//     console.log(`The average score of both teams was equal at ${dolphinsAve}. Wow! how did that happen?`);
// } else if ( koalasAve || dolphinsAve > 100){
//     console.log(`They didn't score 100 points`);
// }

// 1.26 Switch Statement 

const day = 'monday';