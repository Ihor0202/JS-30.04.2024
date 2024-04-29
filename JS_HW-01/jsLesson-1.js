// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//


let say = 'hello';
let say1 = 'owu';
let say2 = 'com';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let P = 3.14;
let num5 = 2.7;
let num6 = 16;
let booleanT = true;
let booleanF = false;
console.log(say, say1, say2, num1, num2, num3, P, num4, num5, num6, booleanT, booleanF);

let firstName = 'Ihor';
let middleName = 'Olegovych';
let lastName = 'Oros';

let person1 = firstName + ' ' + middleName + ' ' + lastName;
console.log(person1);
let person2 = `${firstName} ${middleName} ${lastName}`;
console.log(person2);



// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


let firstName2 = prompt("Введіть ваше ім'я:");
let middleName2 = prompt("Введіть ваше по-батькові:");
let lastName2 = +prompt("Введіть ваш вік:");

console.log("Ім'я:", firstName2);
console.log("По-батькові:", middleName2);
console.log("Вік:", lastName2);