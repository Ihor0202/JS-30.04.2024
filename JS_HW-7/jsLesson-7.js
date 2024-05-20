// - Створити функцію конструктор дл з я об'єктів Userполями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let arrayUsers = [
    new User (1, 'Vasya', 'kool', 'tebgr004', '+380987654321' ),
    new User (2, 'kokos', 'kool', 'tegregr004', '+380987654321' ),
    new User (3, 'abrikoc', 'kool', 'tefgnr004', '+380987654321' ),
    new User (4, 'vanya', 'kool', 'tevcddr004', '+380987654321' ),
    new User (5, 'andy', 'kool', 'tddfgrer004', '+380987654321' ),
    new User (6, 'alex', 'kool', 'sefcter004', '+380987654321' ),
    new User (7, 'fillipin', 'kool', 'vvhhter004', '+380987654321' ),
    new User (8, 'djeck', 'kool', 'tegggr004', '+380987654321' ),
    new User (9, 'oskar', 'kool', 'tffer004', '+380987654321' ),
    new User (10, 'apple', 'kool', 'tebbr004', '+380987654321' ),
]
console.log(arrayUsers)



console.log('Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки обєкти з парними id (filter)')

let pair = arrayUsers.filter(user => {
     if (user.id % 2 === 0) {
         return user
     }
    return false
})

console.log(pair)



console.log('Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)')
console.log(arrayUsers.sort((a, b) => a.id - b.id));




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}

console.log('створити пустий масив, наповнити його 10 обєктами Client')

let clients = []
clients.push(new Client(1, 'vasya', 'kokins', 'kjdenic', '0987653322', ['T-shirt', 'Sweater', 'Jacket']))
clients.push(new Client(2, 'vova', 'fork', 'mugm', '0987653322', ['Smartphone', 'Laptop', 'Tablet', 'Headphones', 'Smartwatch']))
clients.push(new Client(3, 'vlad', 'bleys', 'bynu,', '0987653322', [ 'Dumbbells', 'Bicycle']))
clients.push(new Client(4, 'max', 'cheez', 'htrbtr76', '0987653322', ['Coffee Maker', 'Microwave Oven', 'Blender',]))
clients.push(new Client(5, 'miki', 'kent', 'jgfd654', '0987653322', ['Shampoo', 'Lipstick', 'Perfume', 'Mascara']))
clients.push(new Client(6, 'losha', 'winston', 'jlfsh56', '0987653322', ['Novel', 'Biography', 'Cookbook', 'Self-help', 'Fantasy']))
clients.push(new Client(7, 'rudi', 'bilimows', 'kjhvtu97', '0987653322', ['Action Figure', 'Board Game', 'Puzzle']))
clients.push(new Client(8, 'kolya', 'oldblu', 'jkllllgy00', '0987653322', ['Shovel', 'Pruning Shears', 'Watering Can', 'Gloves', 'Hoe']))
clients.push(new Client(9, 'moddi', 'wasisdas', 'aaasefrd099', '0987653322', ['Dog Food', 'Cat Litter', ]))
clients.push(new Client(10, 'clark', 'isyas', 'yyu8u888', '0987653322', ['Notebook', 'Pen Set', 'Stapler', 'Calculator']))

console.log(clients)



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClient = clients.sort((a, b) => a.order.length - b.order.length)
console.log(sortClient)



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Cars (model, maker, year, maxSpeed, volume,) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.driver = ''
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(`model - ${this.model}`)
        console.log(`maker - ${this.maker}`)
        console.log(`year - ${this.year}`)
        console.log(`maxSpeed - ${this.maxSpeed}`)
        console.log(`volume - ${this.volume}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed
        console.log(this)
    }
    this.changeYear = function (newValue) {
        this.year = newValue
        console.log(this)
    }
    this.addDriver = function (addDriver) {
        this.driver = addDriver
        console.log(this)
    }
}

let car = new Cars('X5', 'BMW', '2018', '220km', 'Power. 225 kW')
// console.log(car)
car.drive()
car.info()
car.increaseMaxSpeed('335km')
car.changeYear('2025')
car.addDriver(arrayUsers[3])



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars2 {

    constructor(model, maker, year, maxSpeed, volume, driver) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = driver
    }
    drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info = function () {
        console.log(`model - ${this.model}`)
        console.log(`maker - ${this.maker}`)
        console.log(`year - ${this.year}`)
        console.log(`maxSpeed - ${this.maxSpeed}`)
        console.log(`volume - ${this.volume}`)
        console.log(`driver - ${this.driver}`)
    }
    increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed
        console.log(this)
    }
    changeYear = function (newValue) {
        this.year = newValue
        console.log(this)
    }
    addDriver = function (driver) {
        this.driver = driver
        console.log(this)
    }

}
let car2 = new Cars2('C-Class', 'Mercedes-Benz', '2018', '220km', 'Power. 225 kW')

console.log(car2);
car2.increaseMaxSpeed('380km')
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = [
    new Cinderella('Jes', 18, '37 size'),
    new Cinderella('Emma', 19, '36 size'),
    new Cinderella('Olivia', 17, '38 size'),
    new Cinderella('Isabella', 18, '39 size'),
    new Cinderella('Sophia', 18, '40 size'),
    new Cinderella('Mia', 17, '41 size'),
    new Cinderella('Harper', 17, '42 size'),
    new Cinderella('Abigail', 16, '43 size'),
    new Cinderella('Ava', 19, '35 size'),
    new Cinderella('Abigail', 18, '34 size'),
]

//  Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
let prince = {name: 'Gary', age: 20, shoeFound: '36 size'}

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const girl of cinderellas) {
    if (girl.footSize === prince.shoeFound) {
        console.log(girl)
    }
}


// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let functionFind = cinderellas.find(item => item.footSize === prince.shoeFound)

console.log(functionFind)



// Через Array.prototype. створити власний foreach, filter, map

let num = [1,2,3,4,5]


Array.prototype.myEach = function (callback) {
    for (const item of this) {
        callback (item)
    }
}

num.myEach (el => console.log(el))

// let numF = num.filter((item => {
//     // if ( item % 2 === 0)
//     //     return  item
// }))
// console.log(numF);

Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
let num2 = [1,5,3,1, -5,-6,-7]
let fil = num2.myFilter ((item => {
    if ( item < 0)
        return  item
}))
console.log(fil);


Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    console.log(result);
};
num2.myMap ()