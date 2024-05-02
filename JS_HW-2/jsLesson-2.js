// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Renaissance',
    pageCount: 280,
    genre: 'horror'
}
console.log(book1)


let book2 = {
    title: 1984,
    pageCount: 290,
    genre: 'Dystopia'
}
console.log(book2)


let book3 = {
    title: 'Rich Dad, Poor Dad',
    pageCount: 180,
    genre: 'Household finances'
}
console.log(book3)



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bookMax1 = {
    title: 'Renaissance',
    pageCount: 280,
    genre: 'horror',
    authors: [
        {name: 'Stephen King', age: 76},
        {name: 'Dale Carnegie', age: 67}
    ]

}
console.log(bookMax1)


let bookMax2 = {
    title: 1984,
    pageCount: 290,
    genre: 'Dystopia',
    authors: [
        {name: 'George Orwell', age: 47},
        {name: 'Jordan Peterson', age: 61}
    ]
}
console.log(bookMax2)


let bookMax3 = {
    title: 'Rich Dad Poor Dad',
    pageCount: 180,
    genre: 'Household finances',
    authors: [
        {name: 'Robert Kiyosaki', age: 77},
        {name: 'Sharon Lechter', age: 70}
    ]
}
console.log(bookMax3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Vasily', username: 'Vasily02', password: 1486},
    {name: 'Ivan', username: 'Ivan94', password: 7629},
    {name: 'Sergiy', username: 'Sergiy87', password: 2736},
    {name: 'Abrikos', username: 'Abrikos02', password: 3874},
    {name: 'Kockos', username: 'Kockos30', password: 7719},
    {name: 'Ihor', username: 'Ihor02', password: 4973},
    {name: 'Alex', username: 'Alex00', password: 6055},
    {name: 'Andy', username: 'Andy99', password: 6906},
    {name: 'Max', username: 'Max06', password: 7942},
    {name: 'Vadim', username: 'Vadim96', password: 4321}
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let tempData = [
    {date: '01.05.2024', morning: '13', noon: '25', night: '17'},
    {date: '02.05.2024', morning: '7', noon: '20', night: '12'},
    {date: '03.05.2024', morning: '10', noon: '27', night: '15'},
    {date: '04.05.2024', morning: '13', noon: '26', night: '20'},
    {date: '05.05.2024', morning: '12', noon: '24', night: '16'},
    {date: '06.05.2024', morning: '15', noon: '25', night: '17'},
    {date: '07.05.2024', morning: '15', noon: '24', night: '18'},
]
console.log(tempData)




// ----------------------------------------------Логічні розгалуження:----------------------------------
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 10
if (x !== 0) {
    console.log('Вірно')
}else {
    console.log('Невірно')
}






// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 15

if (time >= 0 && time < 15) {
    console.log('перша частина')
} else if (time >= 15 && time < 30) {
    console.log('друга частина')
} else if (time >= 30 && time < 45) {
    console.log('третя частина')
}else if (time >= 45 && time < 60) {
    console.log('четверта частина')
} else {
    console.log('???')}




// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

let day = 5;

if (day > 0 && day < 11) {
    console.log('перша декада')
} else if (day > 10 && day < 21) {
    console.log('друга декада')
}else if (day > 20 && day <= 31) {
    console.log('третя декада')
} else {
    console.log('???')}






// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let planDay = 1
switch (planDay) {
    case 1:
        console.log('Понеділок: тренування, навчання')
        break
    case 2:
        console.log('Вівторок: робота, прогулянка')
        break
    case 3:
        console.log('Середа: тренування, навчання, читання книги')
        break
    case 4:
        console.log('Четвер: англійська, написати реферат')
        break
    case 5:
        console.log('Пятниця: пробіжка, піти на концерт')
        break
    case 6:
        console.log('Субота: подивитись серіал, зустрітись з друзями')
        break
    case 7:
        console.log('Неділя: піти до церкви, пограти у фотбул, скласти план на наступний тиждень')
        break
    default:
        console.log('???')
}




//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let userNum1 = prompt('Введіть число 1')
let userNum2 = prompt('Введіть число 2')

if (userNum1 > userNum2) {
    console.log('Максимальне число ' + userNum1)
} else if (userNum1 < userNum2) {
    console.log('Максимальне число ' + userNum2)
}else {
    console.log('Числа рівні')
}



//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//         (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


let  tern= '0' ? true : 'default'
console.log(tern)



//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log(coursesAndDurationArray[0].title + ' супер')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log(coursesAndDurationArray[1].title + ' супер')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log(coursesAndDurationArray[2].title + ' супер')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log(coursesAndDurationArray[3].title + ' супер')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log(coursesAndDurationArray[4].title + ' супер')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log(coursesAndDurationArray[5].title + ' супер')
}
