// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hello= 'hello world'
let lorem= 'lorem ipsum'
let js= 'javascript is cool'

console.log(hello.length)
console.log(lorem.length)
console.log(js.length)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(hello.toUpperCase())
console.log(lorem.toUpperCase())
console.log(js.toUpperCase())



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let hello2= 'HELLO WORLD'
let lorem2= 'LOREM IPSUM'
let js2= 'JAVASCRIPT IS COOL'
console.log('-------------------------')
console.log(hello2.toLowerCase())
console.log(lorem2.toLowerCase())
console.log(js2.toLowerCase())



// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str2 = ' dirty string   '
const dirty = str2.trim()
console.log(dirty)


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';

// console.log(str.split(' '));

function stringToarray(arr) {
    return  arr.split(' ')
}
let arr = stringToarray(str);
console.log(arr)
//------------- не дуже розумію, навіщо робити функцію? адже можна просто написати - console.log(str.split(' '));



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers= [10,8,-7,55,987,-1011,0,1050,0]
let strings = numbers.map(item => item.toString());
console.log(strings)
console.log(numbers)


// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return  nums.sort((a, b) => a-b)
    } else if (direction === 'descending') {
        return  nums.sort((a, b) => b-a)
    } else {
        return '???'
    }
}

console.log()
console.log(sortNums(nums, 'ascending'));



// ==========================
// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
let sortArr = coursesAndDurationArray.sort((item1, item2) => item1.monthDuration - item2.monthDuration)
console.log('відсортувати його за спаданням за monthDuration')
console.log(sortArr)


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArr = coursesAndDurationArray.filter(value => {
    return value.monthDuration > 5
})
console.log('відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців')
console.log(filterArr)


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapArr = coursesAndDurationArray.map((value, index) => {
    value.id = index + 1
    return value
})
console.log('за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}')
console.log(mapArr);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cards = [
    {value: 6, cardSuit: 'spade', color: 'black'},
    {value: 7, cardSuit: 'spade', color: 'black'},
    {value: 8, cardSuit: 'spade', color: 'black'},
    {value: 9, cardSuit: 'spade', color: 'black'},
    {value: 10, cardSuit: 'spade', color: 'black'},
    {value: 'ace', cardSuit: 'spade', color: 'black'},
    {value: 'jack', cardSuit: 'spade', color: 'black'},
    {value: 'queen', cardSuit: 'spade', color: 'black'},
    {value: 'king', cardSuit: 'spade', color: 'black'},
    {value: 6, cardSuit: 'diamond', color: 'red'},
    {value: 7, cardSuit: 'diamond', color: 'red'},
    {value: 8, cardSuit: 'diamond', color: 'red'},
    {value: 9, cardSuit: 'diamond', color: 'red'},
    {value: 10, cardSuit: 'diamond', color: 'red'},
    {value: 'ace', cardSuit: 'diamond', color: 'red'},
    {value: 'jack', cardSuit: 'diamond', color: 'red'},
    {value: 'queen', cardSuit: 'diamond', color: 'red'},
    {value: 'king', cardSuit: 'diamond', color: 'red'},
    {value: 6, cardSuit: 'clubs', color: 'black'},
    {value: 7, cardSuit: 'clubs', color: 'black'},
    {value: 8, cardSuit: 'clubs', color: 'black'},
    {value: 9, cardSuit: 'clubs', color: 'black'},
    {value: 10, cardSuit: 'clubs', color: 'black'},
    {value: 'ace', cardSuit: 'clubs', color: 'black'},
    {value: 'jack', cardSuit: 'clubs', color: 'black'},
    {value: 'queen', cardSuit: 'clubs', color: 'black'},
    {value: 'king', cardSuit: 'clubs', color: 'black'},
    {value: 6, cardSuit: 'heart', color: 'red'},
    {value: 7, cardSuit: 'heart', color: 'red'},
    {value: 8, cardSuit: 'heart', color: 'red'},
    {value: 9, cardSuit: 'heart', color: 'red'},
    {value: 10, cardSuit: 'heart', color: 'red'},
    {value: 'ace', cardSuit: 'heart', color: 'red'},
    {value: 'jack', cardSuit: 'heart', color: 'red'},
    {value: 'queen', cardSuit: 'heart', color: 'red'},
    {value: 'king', cardSuit: 'heart', color: 'red'},
]



// - знайти піковий туз
let cardAce = cards.filter((item) => {
    return  item.value === 'ace' && item.cardSuit === 'clubs'
})
console.log('знайти піковий туз')
console.log(cardAce)



// - всі шістки
let all6 = cards.filter((item) => {
    if (item.value === 6) {
        return item
    }
})
console.log('всі шістки')
console.log(all6)

// - всі червоні карти
let redCards = cards.filter((item) => {
    return  item.color === 'red'
})
console.log('всі червоні карти')
console.log(redCards)



// - всі буби

let allDiamonds = cards.filter((item) => {
    return  item.cardSuit === 'diamond'
})
console.log('всі буби')
console.log(allDiamonds)



// - всі трефи від 9 та більше

let clubs9 = cards.filter((item) => {
    if (item.cardSuit === 'clubs') {
        if (item.value < 9) {

        }else {
            return item
        }
    }
})
console.log('всі трефи від 9 та більше')
console.log(clubs9)

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

const callback = function (accumulator, card) {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card)
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card)
    } else if (card.cardSuit === 'clubs') {
        accumulator.hearts.push(card)
    } else if (card.cardSuit === 'heart') {
        accumulator.clubs.push(card)
    }
    return accumulator
}

let reduceArr = cards.reduce(callback,
    {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
)
console.log('Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в обєкт')
console.log(reduceArr)



// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

let arrayFilter = coursesArray.filter(item => {
    return  item.modules.includes('sass')
})
console.log('написати пошук всіх обєктів, в який в modules є sass')
console.log(arrayFilter)



// --написати пошук всіх об'єктів, в який в modules є docker

let arrayFilter2 = coursesArray.filter(item => {
    return  item.modules.includes('docker')
})
console.log('написати пошук всіх обєктів, в який в modules є docker')
console.log(arrayFilter2)










