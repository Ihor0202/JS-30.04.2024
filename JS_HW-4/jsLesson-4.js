// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle (a, b){
    return a * b
}
console.log(rectangle(7, 30))
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle (r) {
    return console.log(3.14 * r * r)
}
circle(10)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calc (h, r) {
    return console.log(2 * 3.14 * h * r)
}

calc( 15,2)

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrFruits(arr) {
    for (const item of arr) {
        console.log(item)
    }
}
let fruits = ['kokos', 'abrikos', 'orange']
arrFruits(fruits)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function string (arrString) {
    document.write(`<p>${arrString}</p>`)

}
string('text')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list (arrList) {
    document.write(`<ul>
<li>${arrList}</li>
<li>${arrList}</li>
<li>${arrList}</li>
</ul>`)

}
list('text li')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listTwo (arrListTwo, num) {
    document.write(`<ul>`)
    for (let i = 0; i <  num; i++) {
        document.write(`<li>${arrListTwo}</li>`)
    }
    document.write(`</ul>`)

}
listTwo('текст який виводиться 5 разів', 5)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let products = ['kokos', 5, true]
function greate(arr) {
    document.write(`<ul>`)
    for (const product of arr) {
        document.write(`<li>${product}</li>`)
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
    function arrUsers (arr) {
    for (const user of arr) {
       for (const key in user) {
           document.write(`<div>${key}: ${user[key]}</div>`)
       }
    }

    }

arrUsers(users)


// - створити функцію яка повертає найменьше число з масиву



let masNumbers = [13, 35, 47, 28, 5]

function minNum (arr) {
    let num = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]<num) {
            num=arr[i]
        }
    }
    return num
}
console.log(minNum(masNumbers))


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
        let maxSum = 0
        for (const element of arr) {
            maxSum = maxSum + element
        }
    console.log(maxSum)
}
sum(masNumbers)


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
        let newArr = arr[index1]
        arr[index1] = arr[index2]
    arr[index2] = newArr
    return arr
}

console.log(masNumbers)
console.log( swap(masNumbers, 4,2))



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let currencies = [
    { currency: 'USD', value: 40 },
    { currency: 'UAH', value: 1 },
    { currency: 'EUR', value: 42 },
];
    function exchange(sumUAH, arr, exchangeCurrency) {
        let result
        for (const item of currencies) {
            if (item.currency === exchangeCurrency) {
                result = sumUAH / item.value
            }
        }
        return result
    }

console.log(exchange(10000, currencies, 'USD'))



