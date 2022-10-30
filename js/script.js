
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

let numberOfFilms;

function start () {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '' );
    while(numberOfFilms == " " || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '' );
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log ('done');
        } else {
            console.log ('error');
            i--;
        }
    }
}
rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмо");
    } else if (personalMovieDB.count >=  10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else { 
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

 function writeYourGenders() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenders();