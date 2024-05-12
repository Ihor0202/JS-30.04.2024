// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangle = (a, b) => a * b

console.log(rectangle(7, 5))
// - створити функцію яка обчислює та повертає площу кола з радіусом r

const circle = (r) => console.log(3.14 * r * r)

circle(5)

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const calc = (h, r) => 2 * 3.14 * h * r


console.log(calc( 15,2))

// // - створити функцію яка приймає масив та виводить кожен його елемент




let fruits = ['kokos', 'abrikos', 'orange']
const arrFruits = (arr) => {
    for (const item of arr)
    {console.log(item)}}

arrFruits(fruits)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const string = (arrString) => {
    document.write(`<p>${arrString}</p>`)
}
string('text')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const list = (arrList) => {
    document.write(`<ul>
        <li>${arrList}</li>
        <li>${arrList}</li>
        <li>${arrList}</li>
    </ul>`)
}

list('hello')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const listTwo = (arrListTwo, num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num -1; i++) {
        document.write(`<li>${arrListTwo}</li>`)

    }
    document.write(`</ul>`)
}
listTwo('listTwo li 5', 5)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let products = ['kokos', 5, true]

const greate = (arr) => {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
greate(products)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

users = [
    { id: 1, name: 'Іван', age: 25 },
    { id: 2, name: 'Марія', age: 30 },
    { id: 3, name: 'Петро', age: 20 },
    { id: 4, name: 'Олена', age: 35 }
];
const arrUsers = (arr) => {
    for (const user of arr) {
        for (const key in user)
        document.write(`<div>${key} ${user[key]}</div>`)
    }
}
arrUsers(users)


// - створити функцію яка повертає найменьше число з масиву

let masNumbers = [13, 35, 47, 28, 5]

const minNum = (arr) => {
    let num = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<num) {
            num = arr[i]
            console.log(num)

        }
    }
}
minNum(masNumbers)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) => {
    let maxSum = 0
    for (const element of arr) {
        maxSum = maxSum + element
    }
    console.log(maxSum)
}
sum(masNumbers)

// - створити функцію swap. Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44


// [13, 35, 47, 28, 5]
const swap = (arr,index1,index2) => {
    let newArr = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = newArr
    return console.log(arr)
}
console.log(masNumbers)
swap(masNumbers, 1,2)



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let currencies = [
    { currency: 'USD', value: 40 },
    { currency: 'UAH', value: 1 },
    { currency: 'EUR', value: 42 },
];
const exchange = (sumUAH, arr, exchangeCurrency) => {
    let result
    for (const item of currencies) {
        if (exchangeCurrency === item.currency) {
            result = sumUAH / item.value
        }
    }
    return result
}
console.log(exchange(10000, currencies, 'USD'))


