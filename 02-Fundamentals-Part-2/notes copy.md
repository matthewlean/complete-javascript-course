# Notes

## 1.7 Hello World 

Initial alert notification

```js
alert("Hello World!")
```

Declare Varable

```js
let js = 'amazing'
```

If statement with alert
```js
if (js === 'amazing') alert ('Javascript is FUN!')
```

Change Varable
```js
let js = 'boring'
```

Simple maths 
```js
40+8-23
```

## 1.8 Intro To JS 

---

## 1.9 Linking A Javascript File
Adding JS to the HEAD 

```html
<script>
      let js = 'amazing';
      if (js === 'amazing') alert("Javascript is fun!");

      console.log(40 + 8 + 23 - 10);
</script>
```

Adding an external JS File 

```html
<script src="script.js"></script>
```

## 1.10 Values and Variables

Declare a varable 

```js
let firstName = 'Jonas';
console.log(firstName);
```

Varables are like boxes and labels

Name variables with characters and numbers

```
first_name
firstName
$firstName
firstName 
```

```js
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
```

## 1.12 Data Types

7 Types 

Numbers : Floating point numbers, decimals and integers
String : Sequence of characters 'always in quotes'
Boolean: true or false

Undefined : value not defined
Null : Empty value 
Symbol : value that can't be changed 
BigInt : A large number 

Javascript has dynamic typing, values are stored in a variable. 

### Commenting

```js
// single line comment
/* multiple
line 
comment
*/
```

When changing a variable value you don't need to use let 

```js
let javascriptIsFun = true;
console.log(javascriptIsFun);
javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
```

typeof = shows what type the data type is.

## 1.13 let const var

```js
let age = 30; 
age = 31; 
```

const = imutable variable --> can't be changed or delared empty

```js
const birthYear = 1994; 
```

var = used in pre es6. similar to let. 

## 1.14 Basic Operators

### Math Operators
+
= 
- 
* 
/ 
**

### Assignment Operators
x += 10 means x + 10
x *= 4 means x * 4
x ++ means x + 1
x -- means x - 1

### Comparison Operators

>
<
>= 
<= 

## 1.15 Operator Precedence

```html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
```

## 1.16

Coding Challenge #1 

## 1.17 

### Template Literal
Template literal, write a string in an easier way. ES6

write with `back slash`

call variables ${firstName}

```js
const mattNew = `I'm ${firstName}, a ${year - birthYear} year old ${job};
console.log(mattNew)`;
```

start using backticks 

### Multi line string

Old
```js
console.log('String with \n\
multiple \n\
lines');
```

New
```js
console.log(`String
multiple
lines`);
```

## 1.18 If Else

If Else control structure

```js 

if(){

} else{

}
```

## 1.19 Coding Challenge 2 

```js 

let markMass = 78; 
let markHeight = 1.69; 
let johnMass = 92;
let johnHeight = 1.95; 

let markBMI = markMass / (markHeight ** 2 );
let johnBMI = johnMass / (johnHeight ** 2 );

let markHeigherBMI = markBMI > johnBMI; 
console.log(markBMI, johnBMI, markHeigherBMI);

if(markHeigherBMI = true){
    console.log(`Mark's BMI is heigher than Johns'!. Marks BMI is ${markBMI}`);
} else{
    console.log(`Johns BMI is heigher than Mark's!. John's BMI is ${johnBMI}`);
}
```

## 1.20 Type Conversion

Convert string to number

```js
console.log(Number(inputYear));
```

## 1.21 Truthy Falsy

falsy values: 0, '', undefined, null, Nan

=== strict equality
== loose equality - type coersion 

use strict as a rule 

## 1.22 Equality Operator == vs ===

Comparison operator == ===

=== Strict, DOES NOT perform type coercion

== loose equality operator, it DOES type coercion 

!== Strictly not equal 
!= Loose not equal

## 1.23 Boolean Logic 

And && 
Or  ||
Not ! 
 
## 1.24 Logical Operators

## 1.25 Coding Challenge #3 

```js 

const dolphinsGame1 = 96;
const dolphinsGame2 = 108;
const dolphinsGame3 = 89;

const dolphinsAve = ( (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) /3 );
console.log(dolphinsAve);

const koalasGame1 = 88;
const koalasGame2 = 91;
const koalasGame3 = 110;

const koalasAve = ( (koalasGame1 + koalasGame2 + koalasGame3) /3 );
console.log(koalasAve);

if (koalasAve > dolphinsAve && koalasAve > 100){
    console.log(`The Koala's average score of ${koalasAve} is greater than the dolphins average of ${dolphinsAve}.`);
} else if (koalasAve < dolphinsAve && dolphinsAve > 100) {
    console.log(`The Dolphin's average score of ${dolphinsAve} is greater than the Koala's average score of ${koalasAve}.`)
} else if (koalasAve === dolphinsAve > 100){
    console.log(`The average score of both teams was equal at ${dolphinsAve}. Wow! how did that happen?`);
} else if ( koalasAve || dolphinsAve > 100){
    console.log(`They didn't score 100 points`);
}
```

## 1.26 Switch Statement 



```js
const day = 'ss';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course');
        console.log('Go to coding meeting');
        break;
    case 'tuesday': // day === 'monday'
        console.log('Prepare');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Nothing to do');
        break;
    case 'friday':
        console.log('Record');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Weekend!');
        break;
    default:
        console.log('Not a valid day');
}
```

## 1.27 Statement and Expressions

## 1.28 Conditional (Ternary) Operator

a > b ? console.log(a) : console.log(b)

condition ? if : else; 

operator gives and expression 
so can be used in a ternary operator

ternary operator good for small decision

# Javascript Fundamentals Part 2 

## 1.32 Strict Mode

```js
'use strict';
```

Displays errors in spelling mistakes for variables

Prevents use of reserved words

## 1.33 Functions

Create function 

Call function 

```js
logger();
```

Fruit juice function
- define function
- call funtion 
- add parameters 
- save to a varable
- log to the console

Not all functions need to return 
Not all functions need perameters

```js
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
```

Functions are good for reusable code

DRY Code
Don't 
Repeat
Yourself 

```js
console.log(); // is a function
```

```js
Number('23'); // is a function 
```

## 1.34 Function Declarations vs Expressions 

Inside a function you don't need to declare a varaible to return it. 
You can instead return it right away. 

```js 
function calcAge1(birthYear){
    return 2022 - birthYear;
}

//instead of 
function calcAge1(birthYear){
    const myAge = 2022 = birthYear;
    return myAge; 
}
``` 

```js
// Function declaration
function calcAge1(birthYear){
    return 2022 - birthYear;
}
const age1 = calcAge1(1994);
``` 

```js 
// Function expression
const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}
const age2 = calcAge2(1994);
```

## 1.35 Arrow Functions 

Arrow is useful for one line functions 

```js
// Arrow Function 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const untilRetirement = (birthYear , firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}.`
}
```

## 1.36 Functions Calling other Functions

```js
function cutFruit(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));
```

## 1.37 Reviewing Functions

### Function delcaration 
- Function that can be used before it's declared

### Function expression 
- Essentially a function value stored in a variable

### Arrow function 
- Quick one-line functions. Has no 'this' keyword

function functionName ( parameter1, parameter2){
    const valuetoCalculate = a + b; 
    return valuetoCalculate;
}

const functionName ( 1, 2);

## 1.39 Introduction to Arrays

- Only primative values are immutable
- Arrays are not primative value so we can mutate it 

```
const friends = ['Jed','Chris','Rich'];
```

### First value
```js
console.log(friends[0]);
```

### Last value
```js
console.log(friends[friends.length-1]);
```

### Find length 
```js
console.log(friends.length);
```

### Mutating array
```js
friends[2] = 'Mel';
console.log(friends);
```