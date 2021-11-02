// 1. Ways to print in JavaScript
// console.log("Hello World!");
// alert("It's Me!");
// document.write("This is document write");

// 2. JavaScript console API
// console.log("Hello World", 10, 10 + 11, "Another log");
// console.warn("This is warming");
// console.error("This is error");
// console.clear();
// console.assert(4==5);

// 3. JavaScript Variables
var num1 = 34;
var num2 = 42;

// console.log("Addition of num1 and num2",num1 + num2);

// 4. Data types in JavaScript
// Numbers
var num1 = 34;
var num2 = 42;

// Strings
var str1 = "This is String";
var str2 = "This is also a String";

// Objects
var marks = {
  mayur: 95,
  mansi: 98,
  surya: 89,
};

// console.log(marks);

// Booleans
var a = true;
var b = false;

// console.log(a,b);

// Undefined and Null
// Default value of uninitialized var is undefined

var und = undefined;
// console.log(und);

var n = null;

/* 
At a very high level, there are two types of data types in JavaScript
1. Primitive Data Types: undefined, null, number, string, boolean, symbol
2. Reference Data Types: Arrays and objects
*/

var arr = [1, 2, "string inside array", 4, "a"];
// arr[0]
// arr[1]
// console.log(arr[2])

// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is", a+b)
// console.log("The value of a - b is", a-b)
// console.log("The value of a * b is", a*b)
// console.log("The value of a / b is", a/b)

// Assignment Operators
var c = b;
c += 2;
c -= 2;
c *= 2;
c /= 2;
// console.log(c)

// Comparison Operators
var x = 34;
var y = 56;

// console.log(x==y)
// console.log(x!=y)
// console.log(x<=y)

// Logical Operators
// Logical and &&
// Logical or ||
// Logical not !
// console.log(true && true)

// in x + y, operand is x and y and operator is +

// Functions in JavaScript
// DRY = Do not Repeat Yourself
/*
function avg(a, b){
    c = (a+b)/2
    return c
};

c1 = avg(12, 10)
c2 = avg(10, 50) 
*/

// Conditionals in JavaScript
// Single if statement

/*
var age = 12
if (age > 10) {
    console.log('You are not a kid')
}

age = 4
// if-else statement
if (age > 10) {
    console.log('You are not a kid')
}
else{
    console.log('You are a kid')
}

age = 15
// Ladder Statements
if (age > 30) {
    console.log('You are not a kid')
}
else if (age > 25) {
    console.log('You are fuckin boy')
}
else if (age > 18){
    console.log('Majje loo Bissi')
}
else if (age > 13){
    console.log('You are a noob')
}
else{
    console.log('You are a kid')
}
*/

// Loops in JavaScript
// For loop

// var arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr)
// for (var i = 0; i < arr.length; i++){
//     if (i == 2){
//         // break
//         continue
//     }
//     console.log(arr[i])
// }

// Using forEach function to iterate the array
// arr.forEach(function (element) {
//   console.log(element);
// });

// While loop
// let is used to create a variable that has a scope only of a block
/* let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope */

/* To define a constant variable throughout the javascript code then we use const variables */
// const ac = 10
// ac++

// let j = 0
// while (j<arr.length){
//     console.log(arr[j])
//     j++
// }

// Runs atleast ones
// do {
//     console.log(arr[j])
//     j++
// } while (j<arr.length);

// Array Methods

// var myArr = ["Fan", "Camera", 34, null, true]
// console.log(myArr)
// myArr.pop()
// myArr.push("mayur", "JavaScript")
// var b = myArr.shift()
// myArr.unshift("Mayur")

// console.log(myArr)

// Strings methods in JavaScript

// var s = "You are a noob"

// console.log(s.length)
// console.log(s.indexOf('a'))
// console.log(s.lastIndexOf('a'))
// console.log(s.slice(2, 10))
// s = s.replace('noob', 'pro')
// console.log(s)

// Dates in JavaScript

var myDate = new Date();
// console.log(myDate)
// console.log(myDate.getTime())
// console.log(myDate.getDate())
// console.log(myDate.getHours())
// console.log(myDate.getDay())
// console.log(myDate.getMinutes())

// DOM Manipulation
/* The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript. */

var elem = document.getElementById('click')
// console.log(elem) 

var elemClass = document.getElementsByClassName('container')
// console.log(elemClass)
// elemClass[0].style.background = "yellow"
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// elemClass[0].classList.remove("bg-primary")

// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

// console.log(elemClass[0].innerHTML)
// "
//         <a href=\"https://www.google.com\"><button id=\"click\">Click Me!</button></a>  
//     <b>This is the created bold by me</b>"

// console.log(elemClass[0].innerText)
// "Click Me! This is the created bold by me"


tn = document.getElementsByTagName('div')
// console.log(tn)

// add child element in a tag

// createElement create a HTML element this is the method of document
createdElement = document.createElement('p') 
createdElement.innerText = 'This is the created paragraph by me'
// tn[0].classList.add('pargraph-text')
// console.log(tn[0])
tn[0].appendChild(createdElement)
// console.log(tn[0]) 

// replace child element 
createdElement2 = document.createElement('b')
createdElement2.innerText = 'This is the created bold by me'
tn[0].replaceChild(createdElement2, createdElement) 

// selecting using Query
// select elements access elements as in the css
sel = document.querySelector('.container')
// console.log(sel)
sel = document.querySelectorAll('.container')
// console.log(sel)


// on click
function clicked(){
    console.log('This button is clicked')
}

// on load
window.onload = function(){
    console.log('This window is loaded')
}

// Events in JavaScript

// firstContainer.addEventListener('click', function(){
//     console.log('Clicked on firstContainer container')
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log('Mouse over on firstContainer container')
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log('Mouse out on firstContainer container')
// })

// firstContainer.addEventListener('mouseup', function(){
//     console.log('Mouse up on firstContainer container')
// })

// firstContainer.addEventListener('mousedown', function(){
//     console.log('Mouse down on firstContainer container')
// })


// firstContainer.addEventListener('click', function(){
//     console.log('Clicked on firstContainer container')
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML

// firstContainer.addEventListener('mousedown', function(){
//     console.log('Mouse down on firstContainer container')
//     document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>"
  
// })

// firstContainer.addEventListener('mouseup', function(){
//     console.log('Mouse up on firstContainer container')
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML

// })


// Arrow Functions

// function summ(a, b){
//     return a+b
// }
// in this way also functions can be written
summ = (a,b)=>{
    return a+b
}

// setTimeout and setInterval

logKaro = ()=>{
    console.log('setTimeout is fired')
    document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>"
}
// to set the gap in timeinterval that after how much time this event should be occur
// setTimeout(logKaro, 3000)

// setInterval(logKaro, 1000)

// to stop these setInterval and setTimeout 
// give a id to these function like clr in this then use clearInterval(clr)
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// clr = setTimeout(logKaro, 10000)
// clearTimeout(clr)

// clr = setInterval(logKaro, 100)
// clearInterval(clr)


// Local Storage

// this stores in the localStorage of the client PC
// this can be used to store the values of the custID types 
// and they can without login to e commerce can add items in the cart
localStorage.setItem('name', 'mayur')
// this will not goes after refresh or any other

// to get the particular item via key
// localStorage.getItem('name') 

// to clear the localStorage
// localStorage.clear()

// JSON is JS

obj = {name: "mayur", length: 1}
// console.log(obj)

// to convert js object into JSON string
// jso = JSON.stringify(obj)
// console.log(jso)

// Converts a JavaScript Object Notation (JSON) string into an object.
parsed = JSON.parse('{"name": "mayur", "length": 1}')

// Template literals (Template strings)
a = 34
b = 6
// console.log(`this is ${a+b}`)



