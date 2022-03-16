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

## Operator Precedence

```html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
```
