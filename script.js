'use strict';
// console.log('Hello JS');

// test;
// test_1;
// test_2;

// console.log('test: ', test);
// var test = 1;
// console.log('test: ', test);

// // console.log('test_1 - A: ', test_1);
// // console.log('test_2 - A: ', test_2);

// const test_1 = 10;
// let test_2 = 20;

// console.log('test_1 - B: ', test_1);
// console.log('test_2 - B: ', test_2);

// const wage = 12;
// console.log(typeof wage);

// const first = 5;
// const sec = 10;
// let result = sec % first;
// console.log (result);

// const text_1 = 'Hello world';
// const text_2 = "Hello world again";

// // console.log(text_1);
// // console.log(text_2);

// const name = 'Olga';
// const surname = 'Taranova';

// console.log(text_1 + ' ' + text_2);
// console.log(`My name is ${name} ${surname}`);


// let isMonday = true;
// console.log(isMonday);
// console.log(typeof isMonday);
// console.log(!isMonday);


//let result = {};
//console.log(result);
//console.log(typeof result);

// const person = {
//     name: 'Kate',
//     age: 12,
// }

// console.log(person.name);
// console.log(person['age']);

// const arr = ['apple', 3, true];
// console.log(arr.length);
// sayHello();
// sayHello();
// sayHello();


// sayBye('Olga', 'Taranova');
// function sayHello() {
//     console.log('Hello, mamasita!!!');
// }

// function sayBye(name, surname) {
//     console.log(`Bye-bye ${name} ${surname}`);
// }

// hello();
// sum(2, 3, 4);

// const hello = function() {
//     console.log('Hello, my friends');
// }

// const sum = function(a, b, c) {
//     console.log('The result is: ', a + b + c);
// }

// const age = 25;
// console.log(typeof age);
// console.log(typeof String(age));

// const age = 29;
// const str = 'My age is ' + age;
// console.log(typeof str);

// const strange = 'string' + true;
// console.log(typeof strange);

// const word = 'hello';
// const num = '27';
// const boolTrue = true;
// const boolFalse = false;

// const fuu = null;
// const uuu = undefined;
// const number = 234;

// console.log(Number(num));
// console.log(typeof Number(num));
// console.log(Number(word));
// console.log(typeof Number(word));
// console.log(Number(boolTrue));
// console.log(typeof Number(boolTrue));
// console.log(Number(boolFalse));
// console.log(typeof Number(boolFalse));

// console.log(fuu);
// console.log(typeof fuu);
// console.log(Number(fuu));
// // console.log(typeof Number(fuu));

// const sum = Number(num) + Number(fuu);
// console.log(sum);

// console.log(uuu);
// console.log(typeof uuu);
// console.log(Number(uuu));
// console.log(typeof Number(uuu));

// console.log(7 / 0);
// alert('Hello');

// let userName = prompt("Please, enter your name", 'User name');
// const conf = confirm("Are you sure you want to close the page?");

// let num = 1;
// num = -num;

// console.log(num);
// console.log(num - 5);

// const aaa = 8 % 3;
// console.log(aaa);

// const bbb = 2 ** 2;
// console.log(bbb);

// const count = 15;

// if (count < 10 || count > 25) {
//     console.log('The varaible is not in the range');
// }else {
//     console.log('The varaible is in the range');
// }

const currentPassword = '1234567890';
let password = prompt('Введите пароль');

if (password == null) {
    alert('Отменено');
}else if(password === currentPassword) {
    alert('Пароль верный');
}else{
    alert("Пароль не верный");
}


// let age = prompt("Enter your age");

// if (age < 5) {
//     alert('You are too small!');
// }else if (age >5 && age < 18) {
//     alert("Do yoy have parent's permission?");
// }else{
//     alert("Welcome!");
// }