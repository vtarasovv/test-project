// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);


// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };
// // console.log(obj.name);
// console.log(obj ["name"]);

// let arr = ['first', 'second', 'third', {}, []];
// console.log(arr[1]);

// alert ("hello");

// const result = confirm("Are you here?");
// console.log("result");

// const answer = prompt("How are you?", "" );
// console.log(typeof(answer));

// const answers = [];
// // answers [0] = prompt("Как ваше имя?", "");
// // answers [1] = prompt("Как ваша фамилия?", "");
// // answers [2] = prompt("Cколько вам лет?", "");

// console.log (typeof(answers));
// console.log (typeof(null));

// const category = 'toys';

// console.log (`https://someurl.com/${category}/5`);

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
// Задание на урок:

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания
'use strict';


// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '' );

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');



// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         console.log ('done');
//     } else {
//         console.log ('error');
//         i--;
//     }

//           personalMovieDB.movies[a] = b;
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмо");
// } else if (personalMovieDB.count >=  10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else { 
//     console.log("Произошла ошибка");
// }


// console.log(personalMovieDB);



// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('too much');
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

// const num = 'ww';
// switch (num) {
//     case 49:
//         console.log ('incorect');
//         break;
//     case 100:
//         console.log ('incorect');
//         break;
//     case 50:
//         console.log ('right');
//         break;
//     default:
//         console.log ('Not in this case');
//         break;

// }


// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log("i'm feed up");
// }

// const hamburger = 2;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("i'm feed up");
// } else {
//     console.log("We are quit");
// }

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'a;lknfe');

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log("i'm in a good mood");
// } else {
//     console.log("We are quit");
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);


// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//      console.log(num);
//      num++;
// }
// while (num < 55);

// for(let i = 1; i < 10; i++){ 
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);

// }

// for (let i =0; i < 3; i++){
//     console.log(i);
//     for (let j =0; j < 3; j++){
//         console.log(j); 
//     }
// }

// // asterix
// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 5;
// for (let i = 1; i < length; i++){

//     for (let j = 1; j < i; j++) {
//         result += "*";

//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++){
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 5; k++){
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }


// let num = 5;

// while (num <= 10) {
//     console.log (num);
//     num++;
// }

// for (let i = 20; i > 13; i--) {
//     console.log (i);
// }

// for (let i = 2; i < 11; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }    
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);

//     }
// }

// let i = 2;
// while (i <= 16){
//     if(i % 2 === 0) {
//         i++;
//         continue;
//     }else{
//         console.log(i);
//         i++;
//     }

// }

// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     // Не трогаем
//     return arrayOfNumbers;
// }

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr [i]; 
//     }
//     console.log (result);
//     // Не трогаем
//     return result;
// }

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++){
//         if (typeof(data[i]) === 'number'){
//             data[i] = data[i] * 2;
//         }else if (typeof(data[i]) === 'string' ) {
//             data[i] = data[i] + ' - done';
//         }
//     }
//         console.log(data);


//     // Не трогаем
//     return data;
// }

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     let result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }
//     console.log(result);    

//     // Не трогаем
//     return result;

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);

// console.log(calc(4, 3));

// function ret () {
//     let num = 50;

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);


// function doNothing () {}
// console.log(doNothing() === undefined);

// function sayHello(name) {
//     //return "Привет " + name + "!";
//     return `Привет, ${name}!`;
// }
// console.log(sayHello("Антон"));

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// returnNeighboringNumbers(5);


// // Алгебраическая прогрессия
// function getMathResult(num,times) {
//     if(typeof(times) !== 'number' || times <= 0){
//         return num;
//     }
//     let str = " ";

//     for(let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         }else{
//             str += `${num * i}---`;
//         }
//     }
// return str;
// }
// console.log(getMathResult(10, 5));

// const logg = "Hello world";

// console.log(logg.slice(4, 11));

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// 'use strict';

// Код возьмите из предыдущего домашнего задания

// let numberOfFilms;

// function start () {
//     numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '' ).trim();
//     while(numberOfFilms == " " || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '' );
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log ('done');
//         } else {
//             console.log ('error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();



// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмо");
//     } else if (personalMovieDB.count >=  10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else { 
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB (hidden){
//     if (!hidden){
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

//  function writeYourGenders() {
//     for (let i = 1; i <= 3; i++){
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenders();

// const options = {
//     name: 'Test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };


// const {border, bg} = options.colors;
// console.log(border);


// console.log(Object.keys(options).length);



// let counter = 0; 
// for (let key in options) { 
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]) {
//             console.log(`Property ${i} it makes matter ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Property ${key} it makes matter ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border, bg);

// console.log(options["colors"]["border"]);

// console.log(options.name);
// delete options.name;
// console.log(options);


// let counter = 0;
// for(let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for(let i in options[key]) {
//             console.log(`Property ${i} has a value ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//     console.log(`Property ${key} has a value ${options[key]}`);
//     counter++;
//     }
// }

// console.log(Object.keys(options).length);

//  const arr = [2, 13, 26, 8, 10];
//  arr.sort(compareNum);
//  console.log(arr);

//  function compareNum (a, b) {
//     return a - b;
//  }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside the arr ${arr}`)
// });
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
// arr.pop();
// arr.push(10);
// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let value of arr) { 
//     console.log(value);
//});


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(";"));

// Objects tasks
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     makeTest: function(){
//         console.log("Test");
//     }
// };

// //console.log(Object.keys(personalPlanPeter.skills.programmingLangs));
// personalPlanPeter.makeTest();

// // Пример:
// // showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"

// function showProgrammingLangs() {
//    let str = '';
//    const {programmingLangs} = personalPlanPeter.skills; //Вот эта строка
//    for(let key in programmingLangs) {
//     str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//    }
//    console.log(str);
//    return str;
// }
// showProgrammingLangs(personalPlanPeter); 


// console.log(str);

// const list = ["abcde", "xyz", "iddqd", "jfk", "usb", "afk", "jojo", "msn"];
// //нужно получить:
// //["x", "j", "u", "a", "m"]
// let str = list.filter(curentValue => {
//     return curentValue.length == 3; 
// });
// console.log(str);

// let strNew = str.map(item => {
//     return item[0];
// });
// console.log(strNew);


// const list = ["abcde", "xyz", "iddqd", "jfk", "usb", "afk", "jojo", "msn"].filter(curentValue => {
//     return curentValue.length === 3; 
// }).map(item => {
//     return item[0];
// });
// console.log(list);


// list.map(function(list) {
//     if(list.length == 3 ){
//         str.push(list[0]);
//     }
// });
// console.log(str);


// let str = list.forEach(function(list){
//     if(list.length == 3 ){
//         str.push(list[0]);
//     }
// });
// console.log(str);

// const list = ["abcde", "xyz", "iddqd", "jfk", "usb", "afk", "jojo", "msn"];
// let result = list.reduce((prev, item) => {
//     if(item.length == 3) {
//         item.push(1);
//     }
// },);
// console.log(result);


// дано:
// const list = ["abcde", "xyz", "iddqd", "jfk", "usb", "afk", "jojo", "msn"];
// let str = [];
// let str1 = [];
// let str2 = [];
// // нужно получить:
// // ["x", "j", "u", "a", "m"]
// for(let i = 0; i < list.length; i++) {
//     if(list[i].length == 3){
//         str.push((list[i])[0]);   
//     }else{
//         continue;
//     }
// }
// console.log(str);

// for(let i of list) {
//     if(i.length == 3){
//         str1.push(i[0]);

//     }else{
//         continue;
//     }

// }
// console.log(str1);

// for(let key in list) {
//     if(list[key].length == 3){
//         str2.push((list[key])[0]);

//     }else{
//         continue;
//     }

// }
// console.log(str2);



// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     makeTest: function() {
//         console.log("Test")
//     }

// };
// personalPlanPeter.makeTest();



// function showProgrammingLangs(plan){
//     let str = '';
//     const {programmingLangs} = plan.skills;
//         for (let key in programmingLangs){
//             str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//         }
//     return str;
// }
// showProgrammingLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     console.log(exp);
//     return exp;
// }
// showExperience(personalPlanPeter);


/**
 * 1. с помощью Array.reduce получить 42
 */



// const numbers = [1, 2, -4, "1", 25, -0, -1, "abc", 4, NaN, 10];
// //условие ? выражение1 : выражение2

// const sumPositiveNumbers = numbers.reduce( (acc, item) => {
//     return choose(acc, item) ?  acc += item :  acc;


//         // if(chouse(acc, item)){
//         //     return acc += item;
//         // }else{
//         //     return acc;
//         // }    
// },0);
// console.log(sumPositiveNumbers);


// let acc = 0;
// for(let i = 0; i < numbers.length; i++) {
//     return choose(acc, numbers[i]) ? acc += numbers[i] : acc;

//         // if (chouse(acc, numbers[i])) {
//         //     acc += numbers[i];
//         // }
//     }
// console.log(acc);

// function choose (a, b){
//     if(b > 0 && typeof(b) === 'number'){
//         return true;
//     }
// }



// /**
//  * 2.
//  * с помощью Array.map и Array.filter (именно в такой последовательности)
//  * получить массив четвертых букв предоставленных слов (пустые строки не нужны):
//  * ["d", "p", "t", "x"]
//  */

// const words = ["abcde", "soap", "klm", "xyz", "prst", "aoux"];

//     let i = prompt ("Choose a letter", [3]);

//     let fourthLetters = words.map((curent) => {
//         return curent[i];
//     }).filter((curentValue)=>{
//         return curentValue !== undefined;
//     });
// console.log(fourthLetters);

/** 
 * 3.
 * с помощью Array.map и Array.includes получить:
 * ["J_o_hny", "B__o__b", "Dylan", "Alfr_e_d", "Iggy"]
 */



// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLength: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()}`;
//         });
//         return str;
//     }

// };

// personalPlanPeter.showAgeAndLength(personalPlanPeter);


// function showExperience (plan) {
//     const {exp} = plan.skills;
//     console.log(exp);
//     return exp;

// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//         for (let key in programmingLangs) {
//             str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//         }
//     console.log(str);
// }
// showProgrammingLangs(personalPlanPeter);


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = family.join(" ");
//     return `Семья состоит из: ${str}`;
// }
// console.log(showFamily(family));


/**
 * 4.
 * с помощью String.split, String.join, Array.map, Array.filter
 * получить массив преобразованных слов из массива words (см. выше),
 * содержащих только гласные буквы (пустые строки не нужны):
 * ["ae", "oa", "y", "aou"]
 */
// const words = ["abcde", "soap", "klm", "xyz", "prst", "aoux"];
// //const lett = [ 'a', 'b', 'c', 'd', 'e' ];
// function findLetter(newArr){
//     let newArr1 = newArr.filter((letter) => {
//     if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' || letter == 'y') {
//         return true;
//     }   
// });
// console.log(newArr1);
// }

// let vowelsFromWords = words.map((word) => {
//     return findLetter((word.split("")));
// });


// let num = 50;
// let counter = 0;
// while (num < 1000){
//     num *= 3;
//     console.log(num);    
//     num++;
//     counter++;
// }
//  console.log(num);
//  console.log(counter);

// let obj = {};

// for (let i = 0; i <= 4; i++) {
// 	let key = keys[i];
// 	let value = values[i];
	
// 	obj[key] = value;
// }

// console.log(obj);

//Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];

// let obj = {};

// for (let i = 0; i < arr1.length; i++){
//    obj[arr2[i]] = arr1[i];
// }
// console.log(obj);

//С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

//Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let newObj = {};
// // let keys = Object.keys(obj);
// // let values = Object.values(obj);
// // let entries = Object.entries(obj);
// let count = 0;
// for(let key in obj){
//     if(obj[key] % 2 == 0){
//         newObj[key] = obj[key];
//         count++;
//     }
// }
// console.log(newObj);
// console.log(count);
// console.log(keys);
// console.log(values);
// console.log(entries);


//Подсчитайте количество цифр 3 в этом массиве.
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = {};

// for(let elem of arr){
//     if(count[elem] === undefined){
//         count[elem] = 1;
//     }else{
//         count[elem]++;
//     }
// }
// console.log(count);


// let str = 'lsaknfolsndfagnw;uhae;rlsdgnqowabhr;gonqwragh';
// let count = {};

// for(let elem of str){
//     if(count[elem] === undefined){
//         count[elem] = 1;
//     }else{
//         count[elem]++;
//     }
// }
// console.log(count);



//Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
// let arr = [10, 20, 30, 40, 21, 32, 51];
// let sum = 0;
// for(let elem of arr){
//     let curent = '';
//     curent = String(elem);
//     if(curent[0] == 1 || curent[0] == 2){
//         curent = Number(curent);
//         sum += curent;
//     }
// }
// console.log(sum);

// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;

// for (let elem in obj) {
//     console.log(obj[elem[0]]);
// 	if (String(obj[elem[0]]) === 1 || obj[elem] === 20) {
//         console.log('!');
// 		sum += obj[elem];
// 	}
// }

// console.log(sum);

//Код должен найти сумму элементов объекта:
//Код должен проверить, есть ли в массиве число 3 или нет:
// let arr = [1, 2, 3, 4, 5];
// let arrN = [];
// for (let elem of arr) {
// 	arrN.push(elem ** 2);
// }

// console.log(arrN);


// for (let elem in arr) {
// 	arr[elem] = arr[elem] ** 2;
// }

// console.log(arr);


// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] ** 2;
//     console.log(arr[i]);
// }
// console.log(arr);

//№10 Дан массив с числами. Найдите среднее арифметическое его элементов.
// let arr = [1, 2, 3, 4];
// let sum = 0; 
// let meanAr = 0;
// for(let elem of arr) {
//     sum += elem;
// }
// meanAr = sum/(arr.length);
// console.log(sum);
// console.log(meanAr);

//11
// Напишите скрипт, который будет находить факториал числа. 
//Факториал - это произведение всех целых чисел от единицы до заданного числа.
// let num = 5;
// let fuc = 1;
// for(let i = num; i > num; i--) {
//     fuc = fuc * (num - i);
//     console.log(fuc);
// }
// console.log(fuc);

// 12
//Заполните массив числами от 10 до 1 с помощью цикла.
// let arr = [];
// for(let i = 10; i > 0; i--) {
//     console.log(i);
//     arr.push(i);
// }
// console.log(arr);

//13
//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let arr = [1, 3, 4, -1, -3, 2, 0];
// let sum = 0;
// for(let elem of arr) {
//     if(elem > 0) {
//         sum += elem;
//     }
// }
// console.log(sum);

// 14
//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr.length; i++) {
//     if(String(arr[i])[0] == 1 || String(arr[i])[0] == 2 || String(arr[i])[0] == 5) {
//         console.log(arr[i]);
//     }
// }

// for (let elem of arr) {
//     if(elem[0] == 1 || elem[0] == 2 || elem[0] == 5) {
//         console.log(elem);
//     }
// }

//15
//Дан массив с числами. Выведите элементы этого массива в обратном порядке.

// let arr = [1, 2, 3, 4, 5];
// let arrRevers = [];
// for(let i = arr.length - 1; i >= 0; i--) {
//     arrRevers.push(arr[i]);
// }
// console.log(arrRevers);


//16
//Given an array of numbers. Use a loop to display all elements whose value matches their index number in the array.

// let arr = [0, 1, 2, 3, 3, 4, 5];

// for(let elem in arr) {
//     if(elem == arr[elem]){
//     console.log(arr[elem]);
//     }
// }

//17
//Given an array of numbers. 
//Using the loop for and the function document.write print each element of the array in a new line. Use the br tag for 
//this.

// let arr = [0, 1, 2, 3, 3, 4, 5];

// for(let elem of arr) {
//     document.write(elem);
//     document.write('<br>');
// }

//18
//Given an array of numbers. Using the loop for and the function document.write print each element of the array in a 
//separate paragraph.

// let arr = [0, 1, 2, 3, 3, 4, 5];

// for(let elem of arr) {
//     document.write(elem);
//     document.write('<p>');
// }

//19 20
//Make an array of days of the week. Use the loop for to output all the days of the week, and output the weekends in 
//bold.

// let day = 3;
// let arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut'];
// for(let elem in arr) {
//     if(elem == day){
//         document.write(`<i>${arr[elem]}</i>`);
//         document.write('<br>');

//     }else{
//         document.write(arr[elem]);
//         document.write('<br>');

//     }
// }

//21 22
//Increase the salary of each employee by 10%.

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };

// for (let key in obj) {
//     if(obj[key] <= 400) {
//     obj[key] = obj[key] + (obj[key] * 0.1);
//     }
// }
// console.log(obj);

// 23
//Using these arrays, create a new object, making its keys from the elements of the
// first array and its values from the elements of the second.

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {};
// for(let i = 0; i < arr1.length; i++) {
//     let key = arr1[i];
//     let value = arr2[i];
//     obj[arr1[i]] = arr2[i]; 
// }
// console.log(obj);

//24
//Find the sum of the object keys and divide it by the sum of the object values.

// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let sumKeys = 0;
// let sumValues = 0;

// for(let key in obj) {
//     sumKeys += Number(key); 
//     sumValues += obj[key];
// }
// console.log(sumKeys);
// console.log(sumValues);
// console.log(sumKeys / sumValues);

//25
//Write the object keys to one array and the values to another.

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// let arr1 = [];
// let arr2 = [];

// for(let key in obj){
//     arr1.push(key);
//     arr2.push(obj[key]);
// }
// console.log(arr1);
// console.log(arr2);

//26
//Write to the new array the elements whose value starts with the number 1 or the number 2.

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };

// let arr = [];
// for(let key in obj) {
//     if(String(obj[key])[0] === '1' || String(obj[key])[0] === '2' ){
//         arr.push(obj[key]);
//     }
// }
// console.log(arr);

//28
//Create the following object from this array:{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for(let i = 1; i <= 5; i++) {
//     obj[arr[i - 1]] = i;
// }
// console.log(obj);

//Use it to output elements with the text 'l', 'e', 'g' and 'a'

// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];

// console.log(`'${arr[3][2]}', '${arr[1][1]}', '${arr[2][0]}' and '${arr[0][0]}'`);
//Referring to each array element, find the sum of all its elements.

// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];
// let sum = 0;
// for(let elem of arr) {
//     sum += elem[0][0] + elem[0][1] + elem[1][0] + elem[1][1];
// }
// console.log(sum);

// let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];

// console.log(arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0]
// + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1]);


//Use nested loops to find the sum of this array elements.
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let subArr of arr) {
//     for (let elem of subArr) {
//         sum += elem;
//         console.log(elem);
//     }
// }
// console.log(sum);

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;

// for (let subArr of arr) {
//     for(let subSubArr of subArr) {
//         for(let elem of subSubArr) {
//         sum += elem;
//         }
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++) {
//         for(let k = 0; k < arr[i][j].length; k++){
//             sum += arr[i][j][k];
//         }
//     }
// }
// console.log(sum);

//Form the following array using two nested loops:!!!!1

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
//         arr[i][j] = [];

//         for(let k = 1; k <= 5; k++) {
//             arr[i][j].push(k);
//         }

//     }
// }


// console.log(arr);


// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

// Expected result: [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]


// let arr = [];

// for (let i = 0, k = 1; i < 4; i++) {
//     arr[i] = [];

//     for (let j = 0; j <= 5; j++) {
        
//             if (k % 2 === 0) {
//             arr[i].push(k);   
//             }
//             k++;
//     }
// }
// console.log(arr);
// it took me a week to cope it

// Expected result: [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]


// let arr = [];

// for(let i = 0, k = 1; i < 2; i++) {
//     arr[i] = [];
//     for(let j = 0; j < 2; j++) {
//         arr[i][j] = [];
//         for(let n = 0; n < 2; n++) {
//             arr[i][j].push(k++);
//         }
//     }
// }

// console.log(arr);


//Find the sum of the elements of this object.

// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// };
// let sum = 0;
// for(let key in obj) {
//     for(let key123 in obj[key]){
//         console.log(obj[key][key123]);
//         sum += obj[key][key123];
//     }
// }
// console.log(sum);

// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// };

// //Display the element 'b2' and the element 'c1'.

// console.log(obj[2][2], obj[3][1]);


// let obj = {
// 	key1: {
// 		a: 1, b: 2, c: {
// 			d: 3,
// 			e: 4,
// 		}, f: 5,
// 	},
// 	key2: {
// 		g: 6, h: 7,
// 	},
// };

// //Manually - without a loop, find the sum of all elements-numbers.

// console.log(obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f + obj.key2.g + obj.key2.h);

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// };
// //Using loops, find the sum of this object elements.
// let sum = 0;
// for(let key in obj) {
//     let subObj = obj[key];
    
//     for(let subKey in subObj) {
//         sum += subObj[subKey];
//     }
// }

// console.log(sum);

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// };
// let sum = 0;
// for(let key in obj) {
//     let subArr = obj[key];
//     for(let subKey in subArr) {
//         let subSubArr = subArr[subKey];
//         for(let subSubKey in subSubArr) {
//             sum += subSubArr[subSubKey];
//         } 
//     }
// }
// console.log(sum);

// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 		'data43',
// 	],
// };
// //Use nested loops to display all data strings.

// for(let number in data) {
//     for(let elem of data[number]){
//         console.log(elem);
//     }
// }

// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ];

// for(let elem of data) {
//     for(let number in elem) {
//         console.log(elem[number]);
//     }
// }

// let data = [
// 	{
// 		1: [
// 			'data111',
// 			'data112',
// 			'data113',
// 		],
// 		2: [
// 			'data121',
// 			'data122',
// 			'data123',
// 		],
// 	},
// 	{
// 		1: [
// 			'data211',
// 			'data212',
// 			'data213',
// 		],
// 		2: [
// 			'data221',
// 			'data222',
// 			'data223',
// 		],
// 	},
// 	{
// 		1: [
// 			'data411',
// 			'data412',
// 			'data413',
// 		],
// 		2: [
// 			'data421',
// 			'data422',
// 			'data423',
// 		],
// 	},
// ];

// //Use nested loops to display all data strings.

// for(let arrays of data) {
//     for(let numbers in arrays) {
//         for(let elem of arrays[numbers]){
//             console.log(elem);
//         }
//     }
// }

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];

// //Display the data for each employee in the format name - salary.

// for(let employee of employees) {
//     document.write(`${employee.name} - ${employee.salary} <br>`);
// }

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];

// //Display the sum of salaries of all employees.
// let salarySum = 0;
// for(let elem of employees) {
//     salarySum += elem.salary;
// }
// console.log(salarySum);


// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];
// //Display the sum of the salaries of those employees whose age is equal to or greater than 30 years.
// let sumOfGreaterEmployees = 0;
// for(let elem of employees) {
//     if(elem.age >= 30) {
//         sumOfGreaterEmployees += elem.salary;
//     }
// }
// console.log(sumOfGreaterEmployees);

// let months = {
// 	'ru': [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	'en': [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// };

// let lang = 'en'; // может быть или 'ru' или 'en'
// let month = 5;   // число от 0 до 11

// console.log(months[lang][month]);

// 

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);


// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// };

// affairs['2019-12-29'].push('data24');
// affairs ['2019-12-31'] = [];
// affairs ['2019-12-31'].push('data41', 'data42');

// console.log(affairs);

// let students = {
// 	'group1': {
// 		'subgroup11': ['student111', 'student112', 'student113'],
// 		'subgroup12': ['student121', 'student122', 'student123'],
// 	},
// 	'group2': {
// 		'subgroup21': ['student211', 'student212', 'student213'],
// 		'subgroup22': ['student221', 'student222', 'student223'],
// 	},
// 	'group3': {
// 		'subgroup31': ['student311', 'student312', 'student313'],
// 		'subgroup32': ['student321', 'student322', 'student323'],
// 	},
// };

// students.group1.subgroup11.push('student114');
// students.group1.subgroup13 = [];
// students.group4 = {};


// console.log(students);

// console.log(Math.pow(2, 10));
// console.log(Math.sqrt(245));

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0; // 10253
// for(let elem of arr) {
//     sum += Math.pow(elem, 3);
// }
// console.log(Math.sqrt(sum)); // 101.25709851659784


// let num = 587;
// num = Math.sqrt(num);

// console.log(num);//24.228082879171435
// console.log(Math.floor(num));//24
// console.log(Math.ceil(num));//25
// console.log(num.toFixed(1));//24.2
// console.log(num.toFixed(2));//24.23

// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

// let arr = [4, -2, 5, 19, -130, 0, 10];

// let min = Math.min.apply(null, arr);
// console.log(min);


// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInt(10, 100));


// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInt(10, 1));

// let arr = [];
// for(let i = 0; i <= 10; i++) {
//     arr.push(getRandomInt(10, 1));
// }
// console.log(arr);

// let a = getRandomInt(10, -10);
// let b = getRandomInt(10, -10);


// console.log(Math.abs(a - b));
// console.log(a);
// console.log(b);

// let str = 'js';

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

//строка.slice(откуда отрезать, [докуда отрезать])
//строка.substr(откуда отрезать, [сколько символов отрезать])
//строка.substring(откуда начать отрезать, [докуда отрезать])

// let str = `I'm learning JavaScript`;
// console.log(str.length);

// console.log(str.substr(0, 4), str.substr(12, 23));
// console.log(str.substring(0, 3));
// console.log(str.slice(-11, 23));

// console.log(str.indexOf('learning'));

// let str1 = 'abcde';

// console.log(str1.indexOf('c'));
// console.log(str1.indexOf('a'));
// console.log(str1.indexOf('a',0));
// console.log(str1.lastIndexOf('a', 3));


//str.startsWith(searchString[, position])
//str.endsWith(searchString[, length])

// let str = 'http://code.mu/en/javascript/book/prime/inbuilt/string/.html';

// console.log(str.endsWith('.html'));

// let str = '12345';

// console.log(str.split(''));

    // let arr = [1, 2, 3];
    // arr.unshift(4, 5, 6);
    // console.log(arr);

// Display the first element of this array.
// let arr = [1, 2, 3];

// let first = arr.shift();
// let last = arr.pop();
// console.log(first, last);

//[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

// let arr = [1, 2, 3, 4, 5];
// let sub = [];
// console.log(arr.indexOf(4));
// sub = arr.splice(1, 0, 'a', 'b');
// console.log(arr);
// sub = arr.splice(4, 0, 'c');
// console.log(arr);
// sub = arr.splice(8, 0, 'e');
// console.log(arr);
// let res = arr.includes(3);
// console.log(res);




//let str = 'London';

//let result = str.slice(0, 1).toUpperCase() + str.slice(1);
//console.log(result); // shows 'London'

//Convert the last character of the string to uppercase.

// let result = str.slice(0, 5) + str.slice(5,6).toUpperCase();
// console.log(result);

// result = str.slice(0, 2).toUpperCase() + str.slice(2, 6);
// console.log(result);

// result = str.slice(0, 1).toLocaleLowerCase() + str.slice(1, 6);
// console.log(result);


// let str = 'word1 word2 word3';

// let res = str.split(' ');
// console.log(res);

// for(let i = 0; i < res.length; i++) {
//     console.log(res[i]);
//     res[i] = res[i].slice(0, 1).toUpperCase() + res[i].slice(1);
//     console.log(res[i]);
// }

// res = res.join(' ');
// console.log(res);

// console.log(typeof(res));

//Convert the string 'var_test_text' to 'VarTestText'.
//The code you write should work for any strings of this type 
//(that is, strings where words are separated by underscores).


// let str = 'var_test_text_fukc_laknf_lakdn_alshf';

// let conv = str.split('_');
// console.log(conv);
// for(let elem in conv) {
//     conv[elem] = conv[elem].slice(0, 1).toUpperCase() + conv[elem].slice(1);
// }

// console.log(conv);
// let res = conv.join(' ');
// console.log(res);

// let newRes = res.split(' ');
// console.log(newRes);

// for(let elem in newRes) {
//     newRes[elem] = newRes[elem].toLowerCase();
// }

// newRes = newRes.join(' ');
// console.log(newRes);

// let str = '12345';
// let result = str.split('').reverse().join('');

// console.log(result); // shows '54321'

// let str = 'mom dad son daugther';
// let arr = [];
// arr = str.split(' ');
// console.log(arr);
// // arr.reverse();
// // console.log(arr);
// let reverseArr = [];
// for(let i = arr.length; i > 0; i--) {
//     reverseArr.push(arr[i - 1]);
//     console.log();
// }


// console.log(reverseArr);
// let res = reverseArr.join(' ');
// console.log(res);

// function myName () {
//     console.log("Batman");
// }

// myName();

// // Make a function that prints the sum of numbers from 1 to 100 to the console.

// function sum () { 
//     let sumOfNumbers = 0;
//     for (let i = 0; i < 100; i++) {
//         sumOfNumbers += i;
//     }
//     console.log(sumOfNumbers);
// }
// sum();

//Make a function that takes a number as a parameter and prints the cube of this number to the console.

// function cube(param) {
//     console.log(param ** 10);
// }


// cube(2);

// function check(figure) {
//     if (figure > 0) {
//         console.log('+++');
//     }else{
//         console.log('---');
//     }
// }

// check(-1);
// check(1);
// check(0);
// //Make a function that takes 3 numbers as parameters and prints the sum of these numbers to the console.

// function add (first, second, third) {
//     console.log(first + second + third);
// }

// add(5, 10, 15);

/* //Make a function that takes a number as a parameter and returns the cube of that number. Use this 
function to find the cube of the number 3 and store it in the variable res.*/

// function squareRoot(num) {
//     return Math.sqrt(num);
// }

// console.log(squareRoot(3) + squareRoot(4));

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }

// // console.log(round(sqrt(2)));


// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }

// let res = sum(sqrt(2), sqrt(3), sqrt(4));
// res = round(res);
// console.log(res);

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num ** 2;
// 	}
// }

// console.log( func(10) );
// console.log( func(-5) );

// function func(num1, num2) {
// 	let res;
	
// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
	
// }

// console.log(func(3, -4));

// Make a function that takes an array of numbers as a parameter,
//  and check that all elements in this array are even numbers.
// let num = 55;
// // let str = String(num); 
// // let arr = str.split('');
// // console.log(arr);
// function isEven(param) {
//     let str = String(param);
//     let arr = str.split('');
//     for (let elem of arr) {
//         if(elem % 2 === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isEven(13578));

//Make a function that takes an array as a parameter and checks if
// there are two identical elements in a row in this array.
// let arr = [1, 2, 3, 4, 5, 5];
// function same (param) {
//     for(let i = 1; i < param.length; i++) {
//         if(param[i] === param[i - 1]) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(same(arr));


/* Write a function that takes a number as a parameter and divides it by 2 as many
 times until the result is less than 10. Let the function return the number of iterations 
 it took to achieve the result. */

// function few10(param) {
//     let count = 0;
//     let number = param;

//     while(true) {
//         number = number / 2;
//         count++;
//         if(number < 10) {
//             return count;
//         }
//     }

// }
// console.log(few10(200));

// function func(num) {
//     return num >= 0;
// 	// if (num >= 0) {
// 	// 	return true;
// 	// } else {
// 	// 	return false;
// 	// }
// }


// console.log(func(2));
// console.log(func(-2));
// console.log(func(0));


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [2, 3, 4, 5, 6]; 
// function getSum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
//     }
//     return res;
// }        
// console.log(getSum(arr1), getSum(arr2));

// function getQuotient(res1, res2){
// 	return res1 / res2;
// }

// console.log(getQuotient(getSum(arr1), getSum(arr2)));

// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);

// function getDigitsSum(num) {

// 	let arr = String(num).split('');
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
	
// 	return sum;
// }

// console.log(isPrime(13)); // should output true ???

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i !== 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }
//Make a function that takes an array as a parameter and returns the sum of its elements.
// let arr = [1, 2, 3, 4, 5];

// function getSum(arr) {
//     let sum = 0;
//     for(let elem of arr) {
//         sum += elem;
//     }
//     return sum;
// }

// console.log(getSum(arr));

//Make a function that takes a number as a parameter and returns an array of its divisors.

// function getArrDivis(number) {
//     let divisors = [];
//     let i = number;
//     while(i > 0){
//         if(number % i === 0) { 
//         divisors.push(i);
//         }
//     i--;
//     }
//     return divisors;
// }

// console.log(getArrDivis(45));

//Make a function that takes a string as a parameter and returns an array of its characters.

// let str = 'abcdef'
// function getSepar(str) {
//     return str.split('');
// }
// console.log(getSepar(str));

//Make a function that takes a string as a parameter and flips its characters in reverse order.


// function strRevers(str) {
//     let arr = str.split('');
//     let result = [];
//     for (let i = arr.length; i >= 1; i--) {
//         result.push(arr[i-1]);
//     }
//     // for (let key in arr) {
//         //     result.unshift(arr[key]);
//         // }
//         return result;
//     }
//Make a function that takes a string as a parameter and capitalizes the first letter of that string.
// let str = 'abcdef';
// let string = 'I love my family';
    
// function capitFirstLetter (str) {
//    let res = str.slice(0, 1).toUpperCase() + str.slice(1);
//    return res;
// }

// function capEachFirstLetter(str) {
//     let arr = str.split(' ');
//     let res = [];
//     for(let elem of arr) {
//        res.push(capitFirstLetter(elem));
//     }
//     return res.join(' ');
// }
// console.log(capEachFirstLetter(string));

//Make a function that fills an array with integers from 1 up to the given one.

// function fillArrOfInt(integer) {
//     let arr = [];
//     for (let i = 1; i <= integer; i++) {
//         arr.push(i);
//     }
//     return arr;
// }


// //Make a function that will return a random element from an array.


// function random(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         return arr[getRandomInt(arr.length, i)];
//     }
// }

// function getRandomInt(max, min) {
//     return Math.floor(Math.random() * (max - min + 1));
// }

// console.log(random(fillArrOfInt(100)));

//Make a function that will take a number as a parameter and check if it is prime or not.

// function isPrime(num) {
//     for(let i = 2; i < num; i++) {
//         if(num % i === 0){
//         return false;
//         }
//     }
//     return num > 1;
// }


// console.log(`1 ${isPrime(1)}`);
// console.log(`2 ${isPrime(2)}`);
// console.log(`3 ${isPrime(3)}`);
// console.log(`4 ${isPrime(4)}`);
// console.log(`5 ${isPrime(5)}`);
// console.log(`99 ${isPrime(99)}`);

// function getPrimes(num) {
//     let primes = [];
//         for(let i = 1; i <= num; i++) {
//             if(isPrime(i)){
//                 primes.push(i);
//             }
//         }
//     return primes;
// }

// console.log(getPrimes(100));

// function getPrimes(num) {
//     let seive = [];
//     let primes = [];
//     for(let i = 2; i <= num; i++) {
//         if(!seive[i]) {
//             primes.push(i);
//             for(let j = i * 2; j <= num; j += i) {
//                 seive[j] = true;
//             }
//         }
//     }

//     return primes;
// }

// getPrimes(120);

/* Make a function that will check a pair of numbers for friendliness. 
Amicable numbers are two numbers for which the sum of all proper divisors of the first number
is equal to the second number and vice versa, the sum of all proper divisors of the
second number is equal to the first number */

//Creating arr of divisors

// function getDivisors(num) {
//     let arr = [];
//     for(let i = 1; i < num; i++) {
//         if(num % i === 0) {
//             arr.push(i);
//         }
//     }    
//     return arr;
// }

// console.log(getDivisors(220));
// console.log(getDivisors(284));

// // Finding sum of divisors
// function getSumOfDivisors(arr) {
//     let sum = 0;
//     for(let elem in arr){
//         sum += arr[elem];
//     }
//     return sum;
    
// }

// console.log(getSumOfDivisors(getDivisors(220)));
// console.log(getSumOfDivisors(getDivisors(284)));

// // Comraring divisors
// function checkFrindlinessNumbers(num1, num2) {
//     let sum1 = getSumOfDivisors(getDivisors(num1));
//     let sum2 = getSumOfDivisors(getDivisors(num2));
//     console.log(sum1, sum2);
//     return sum1 == num2 && sum2 == num1;
// }

// console.log(checkFrindlinessNumbers(220, 284));


// // Using the function you created from the previous task, find all pairs of amicable numbers between 1 and 1000.

// function getFriendlinessNumbers(){
//     let arrFriendlines = [];
//         for(let i = 1; i <= 1000; i++ ) {

//             for(let k = 1; k <= 1000; k++) {
//                if(checkFrindlinessNumbers(i, k) === true) {
//                     arrFriendlines.push(i, k);
//                }
//             }
//         }
//     return arrFriendlines;
// }

// console.log(getFriendlinessNumbers());

// /*Make a function that will check the number for perfection.
// A perfect number is a number whose sum of its own divisors is equal to that number.*/


// // function getPerfectNum(num) {
// //     let divisors = num;
// //     let sumDivisors = getSumDivisors(getDivisors(num));
// //     return divisors === sumDivisors;
// // }

// // function getDivisors(num){
// //     let arr = [];
// //     for(let i = 1; i < num; i++){
// //         if(num % i === 0) {
// //             arr.push(i);
// //         }
// //     }
// //     return arr;
// // }

// // function getSumDivisors(arr){
// //     let sum = 0;
// //     for(let elem of arr) {
// //         sum += elem;
// //     }
// //     return sum;
// // }
// // console.log(getDivisors(28));
// // console.log(getSumDivisors(getDivisors(28)));
// // console.log(getPerfectNum(28));

// //Find all lucky tickets. A lucky ticket is a ticket where the sum of the first
// //three digits of its number is equal to the sum of the second three digits of its number.


// function getArrOfLucky() {
//     let luckyArr = [];
//     for(let i = 0; i <= 999999; i++){
//         let ticket = getCurentTicket(i);
//         if(isLuckyTicket(ticket) == true) {
//             luckyArr.push(ticket);
//         }
//     }
//     return luckyArr;
// }
// function getCurentTicket(curent) {
//     let number = String(curent);
//     let result = number.split('');
//     for(let i = 0; i < 6; i++){
//         if(result.length < 6) {
//         result.unshift('0');
//         }
//     }    
//     return result.join('');
// }


// function isLuckyTicket(ticket) {
//     let firstPart = ticket.slice(0, 3).split('');
//     //console.log(firstPart);
//     let firstSum = findSum(firstPart);
//     //console.log(firstSum);
//     let secondPart = ticket.slice(3, 6).split('');
//     //console.log(secondPart);
//     let secondSum = (findSum(secondPart));
//     //console.log(secondSum)
//     return firstSum === secondSum;
// }
// console.log(isLuckyTicket('123321'));

// function findSum(part) {
//     let sum = 0;
//     let arr = part;
//     //console.log(arr);
//     for(let elem of arr) {
//         sum += Number(elem);
//     }
//     return sum;
//  }
// //console.log(findSum('123'));
 
// console.log(getArrOfLucky());


//Make a function that takes two numbers as a parameter and returns an array of their common divisors.
// console.log(getArrDivis(16, 20));
// function getArrDivis(num1, num2) {
//     let firstArr = getDivisors(num1);
//     let secondArr = getDivisors(num2);
//     let res = [];
//     for(let key in firstArr) {
//         for(let keyI in secondArr) {
//             if(firstArr[key] === secondArr[keyI]){
//                 res.push(firstArr[key]);

//             }
//         }
//     }
//     return res;
// }
// function getDivisors(num) {
//     let arr = [];
//     for(let i = 1; i < num; i++){
//         if(num % i === 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
//Make a function that will take a number and return that number in words. Let the function work 
//with numbers up to 999. See an example: func(123); // prints 'one hundred twenty three'

// function textNumber(number) {
//     let curent = String(number);
//     if(curent <= 19) {
//         return figures[+curent];
//     } 
//     if(curent > 19 && curent < 100) {
//         let arr = curent.split('');
//         return  tenth[arr[0]] + ' ' + figures[arr[1]];
//     }
//     if(curent >= 100 && curent <= 999) {
//         let arr = curent.split('');
//         return figures[arr[0]] + ' hundred ' + tenth[arr[0]] + ' ' + figures[arr[1]];
//     }
// }
// const figures = {
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five', 
//     6: 'six',
//     7: 'seven',
//     8: 'eight',
//     9: 'nine',
//     10: 'ten',
//     11: 'eleven',
//     12: 'tvelwe',
//     13: 'thirteen',
//     14: 'fourteen',
//     15: 'fifteen',
//     16: 'sixteen',
//     17: 'seventeen',
//     18: 'eighteen',
//     19: 'nineteen'
// };
// console.log(textNumber(10));

// const tenth = {
//     2: 'twenty',
//     3: 'thirty',
//     4: 'fourty',
//     5: 'fifty',
//     6: 'sixty',
//     7: 'seventy', 
//     8: 'eighty',
//     9: 'ninety'
// };
// console.log(textNumber(35));

// console.log(textNumber(888));
// console.log(textNumber(735));
// console.log(textNumber(238));

// let arr = [
//     function() {return 1;},
//     function() {return 2;},
//     function() {return 3;}

// ];

// for(let elem of arr) {
//     console.log(elem());
// }

// let obj = {
//     func1: function() {return 1;},
//     func2: function() {return 2;},
//     func3: function() {return 3;}
// };

// console.log(obj.func1() + obj.func2() + obj.func3());


// for(let elem in obj) {
//     console.log(obj[elem]());
// }

// let math = {
//     sum: function(arr) {
//             let sum = 0;
//             for(let elem of arr){
//             sum += elem;
//             }
//             return sum;
//         },
//     sumSquares: function(arr) {
//        let sumSqrt = 0;
//        for(let elem of arr) {
//             sumSqrt += (elem * elem);
//        }
//         return sumSqrt;
//     },
//     sumCubes: function(arr) {
//         let sumCubes = 0;
//         for(let elem of arr) {
//             sumCubes += (elem * elem * elem);
//         }
//         return sumCubes;
//     }

// };
// let arr = [1, 2, 3, 4, 5];
// console.log(math.sum(arr));
// console.log(math.sumSquares(arr));
// console.log(math.sumCubes(arr));



// test (
//     function() {return 1;},
//     function() {return 2;},
//     function() {return 3;},
    
// );
    
// function test(func1, func2, func3){
//     console.log(func1() + func2() + func3());
// }

// Make the function test that takes 3 functions as 
//parameters and returns the sum of the results of the passed functions.

// let make1 = function() {
//     return 1;
// };
// let make2 = function() {
//     return 2;
// };
// let make3 = function() {
//     return 3;
// };

// test(make1, make2, make3);

// function test(func1, func2, func3){
//     console.log(func1() + func2() + func3());
// }

// let func1 = function() {
//     return 1;
// };
// let func2 = function() {
//     return 2;
// };
// let func3 = function() {
//     return 3;
// };

// test(func1, func2, func3);

// // Выведет 9:
// test(function(num) {
// 	return num * num;
// });

// Выведет 9:
// test(function func(num1, num2) {
// 	return num1 + num2;
// });

// function test(func) {
// 	console.log(func(2, 3));
// }


// function test(arr, func) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] = func(arr[i]);
//     }
//     return arr;
// }

// let result = test([1, 2, 3], function(num){
//     return num * num * num;
// });

// console.log(result);

/*Make the function func that will take two numbers as parameters and return the sum
of the square of the first number with the cube of the second number. To do this,
make the helper function square, squaring the number, and the helper function cube, raising the number to the cube.*/

// function func(num1, num2) {
//     function square(num) {return num * num;}
//     function cube(num) {return num * num * num;}
//     return square(num1) + cube(num2);
// }

// console.log(func(2, 3));
// let arr = [];
// function func(num1) {
//     arr.push(num1);
//     return function(num2) {
//         arr.push(num2);
//         return function(num3) {
//             arr.push(num3);
//             return function(num4) {
//                 arr.push(num4);
//                 return function() {
//                     return arr;
//             };
//         };
//     };
// }
// }
// console.log(func(2)(3)(4)(5)());
//Modify the previous task so that the countdown goes up to 0, and then each subsequent function
//call prints a message to the console that the countdown has ended.
// function test() {
//     let num = 10;
//     return function func() {
//         console.log(num);
//         num--;
//     };
// }
// let func = test();

// for(let i = 10; i >= 0; i--){
//     if(i > 0) {
//         func();
//     }else{
//         console.log('Counting complete');
//     }
// }

// (function(num1, num2) {
// 	console.log(num1 + num2);
// })(1, 2);

// (function() {
// 	// какой-то код
//     return function() {
//         return function() {
//             console.log('!');
//         };
//     };
// })()()();

// (function(num1) {
//     return function(num2) {
//         console.log(num1 + num2);
//     };
// 	// какой-то код

// })(1)(2);

// (function(num1) {
//     return function(num2) {
//         return function(num3) {
//             console.log(num1 + num2 + num3);
//         };
//     };
// // какой-то код
// })(1)(2)(3);

//callback - it's function passed as a parameter another function.
/*
function each(arr, callback) {
    //here is some code
}
*/

// function each(arr, callback) {
//     let result = []; //closure inside function each
//     for(let elem of arr) {
//         result.push(callback(elem)); // invokes the callback function
//     }
//     return result;
// }

// //let arr = [1, 2, 3, 4, 5];

// // let result = each(arr, function(num) {
// //     return num * 2;
// // });
// // console.log(result);

// let arr = ['abc', 'abc', 'abc']; 

// let result = each(arr, function(str) {
//     let arr = str.split('');
//     let rev = func(arr);
//     return rev.join('');

//     //return str.split('').reverse().join('');
// });
// console.log(result);


// function func(arr){
// let res = [];
//     for (let i = arr.length-1; i >= 0; i--) {
//         res.push(arr[i]);
//     }
//     return res;
// }

// let capitalizes = each(arr, function(str) {
//     return str.slice(0,1).toUpperCase() + str.slice(1);
// });
// console.log(capitalizes);

// function cube(num) {
//     return num ** 3;
// }

// let result = each([1, 2, 3, 4, 5], cube);
// console.log(result);


// function every(arr, callback) {
//     let result = []; //closure inside function each
//     for(let elem of arr) {
//         result.push(callback(elem)); // invokes the callback function
//     }
//     return result;
// }
// let result = every([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

//let result = every([1, 2, 3, 4, 5], elem => elem < 0);
// let result = every([1,2,3,4,5], (elem, index) => elem * index > 10); 


// console.log(result);



// function test(arr) {
    //         for(let elem of arr){
        //             console.log(elem);
        //             if(arr.length < 5) {
            //             test(arr);
            //             }
            //     }
            // }
            
            
// test(arr);
            
// function func(arr) {
//     console.log(arr[0]);
//     arr.shift();
//     if(arr.length != 0) {
//         func(arr);
//     }
// }
// func(arr);
                    
// let arr = [1, 2, 3, 4, 5];

// function getSum(arr) {
//     let sum = arr.shift();
//     if(arr.length !== 0){
//         sum += getSum(arr);
//     }
//     return sum;
// }
// console.log(getSum(arr));

// function getSumOfCube(arr) {
//     let sumOfCube = arr.shift();
//     if(arr.length !== 0) {
//         sumOfCube += getSumOfCube(arr) ** 2; 
//     }
//     return sumOfCube;
// }
// console.log(getSumOfCube([1, 2, 3, 4, 5]));

//************************************* Recursion haven't done yet *************************************************/

//*Given an array of numbers. Using the map method, extract 
//the square root of each array element and write the result to a new array

// let arr = [1, 9, 81, 100];

// let result = arr.map(function(elem){
//     return Math.sqrt(elem);
// });

// console.log(result);

// let arr = ['abc', 'bcd', 'cde', 'def'];

// let result = arr.map(function (elem) {
//     return elem + '!';
// });

// console.log(result);

// let reverse = arr.map(function(elem) {
//     return elem.split('').reverse().join('');
// });

// console.log(reverse);
// let arr = ['123', '456', '789'];

// let dimentional = arr.map(function(elem) {
//     return elem.split('').map(function(elem){
//         return Number(elem);
//     });
// });

// console.log(dimentional);

// let arr = [1, 2, 3, 4, 5];

// let result = arr.map(function(elem, index) {
//     return elem * index;
// });
// console.log(result);

// let arr = [-1, 1, -2, 2, 3, 4, 5, 12, 32, 23];
// let sumOfSqrt = 0;

// arr.forEach(function(elem){
//     sumOfSqrt += elem ** 2;
// });

// console.log(sumOfSqrt);

// let positive = arr.filter(function(elem) {
//     return elem > 0 && elem < 10; 
// });
// console.log(positive);

// let arr = ['qwerty', 'asdfgh', 'qwe', 'ert' ];

// let res = arr.filter((elem) => {return elem.length > 5;});
// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = arr.filter((elem, index) => {return elem * index < 10;});
// console.log(res);

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// console.log(arr.filter((elem) => {return Number(elem); }));

// let arr = [-1, -5, -6, -7];

// console.log(arr.filter((elem) => {return elem < 0;}).length);

// console.log(arr.every((elem, index) => {return elem * index < 30;}));

// let res = arr.some((elem, index) => elem * index > 30);
// console.log(res);

// let arr = [1, 2, 3, 4, 5];

// function func(num1, num2, num3, num4, num5) {
//     return num1 + num2  + num3 + num4 + num5;
// }

// console.log(func(...arr));

// let min = Math.min(...arr);
// console.log(min);

// let arr1 = ['a', 'b', 'c'];
// let arr2 = [...arr1, ...'12345'];

// console.log(arr2);

// let arr = [1, 2, 3, 4, 5, 6];

// function func(...nums) {
//     let sum = 0;
//     for(let elem of nums) {
//         sum += elem;
//     }
//     return sum / nums.length;
// }

// console.log(func(1, 2, 3, 4, 5, 6));

// function merge(... arrs) {
//     return [].concat(...arrs);
// }

// let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result); // shows [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let arr = [1233, , 12];
// function func() {
//     return (new Date).getDate();
// }
// function funcYear() {
//     return (new Date).getFullYear();
// }
// function funcMonth() {
//     return (new Date).getMonth();
// }
// let [year = funcYear(), month = funcMonth(), day = func()] = arr;

// console.log(year, month, day);

// func( 'development', ['John', 'Smit'], [2018, 12, 31] );

// function func(department, [name, surname], [year,month,day]) {
//     console.log(department);
//     console.log(name);
//     console.log(surname);
//     console.log(year);
//     console.log(month);
//     console.log(day);
// }

// About date
// function addZero(num){
//     if(num >= 0 && num  <= 9) {
//         return '0' + num;
//     }else{
//         return num;
//     }
// }
// let date = new Date();

// console.log(
//     addZero(date.getHours()) + ':' +
//     addZero(date.getMinutes()) + ':' + 
//     addZero(date.getSeconds()) + ' ' + 
//     addZero(date.getDate()) + '.' + 
//     addZero(date.getMonth()) + '.' + 
//     date.getFullYear()
//     );


// let str = '2025-12-31';
// console.log(str.split('-').reverse().join('/'));

// let date = new Date();
// function howManyDays(num){
//     return (7 - num) + " days reast until Sunday";
// }

// function dayOff(num) {
//     if(num == 0 || num == 6){
//         return num + ' Weekend';
//     }else{
//         return num + ' Workday';
//     }
// }

// console.log(dayOff(date.getDay())); 
// console.log(howManyDays(date.getDay())); 

// let months = [
// 	'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
// 	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
// ];

// let month = date.getMonth();

// console.log(months[month]);

// let date = new Date();

// let day = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day]);

let date = new Date(2015, 11, 4, 23, 59, 59);
console.log(date.getTime());