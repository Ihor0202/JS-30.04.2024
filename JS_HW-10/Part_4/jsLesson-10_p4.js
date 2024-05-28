const users = [
    { name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 22 },
    { name: "David", age: 35 }, { name: "Eva", age: 28 }, { name: "Frank", age: 40 },
    { name: "Grace", age: 27 }, { name: "Helen", age: 24 }, { name: "Ian", age: 29 },
    { name: "Jack", age: 31 }, { name: "Karen", age: 33 }, { name: "Leo", age: 26 },
    { name: "Mona", age: 23 }, { name: "Nancy", age: 34 }, { name: "Oscar", age: 36 },
    { name: "Paul", age: 38 }, { name: "Quincy", age: 21 }, { name: "Rita", age: 32 },
    { name: "Sam", age: 39 }, { name: "Tina", age: 20 }, { name: "Uma", age: 37 },
    { name: "Vera", age: 22 }, { name: "Will", age: 30 }, { name: "Xena", age: 28 },
    { name: "Yuri", age: 27 }, { name: "Zara", age: 26 }, { name: "Alice", age: 29 },
    { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }, { name: "David", age: 31 },
    { name: "Eva", age: 32 }, { name: "Frank", age: 40 }, { name: "Grace", age: 27 },
    { name: "Helen", age: 24 }, { name: "Ian", age: 29 }, { name: "Jack", age: 34 },
    { name: "Karen", age: 33 }, { name: "Leo", age: 26 }, { name: "Mona", age: 23 },
    { name: "Nancy", age: 34 }, { name: "Oscar", age: 36 }, { name: "Paul", age: 38 },
    { name: "Quincy", age: 21 }, { name: "Rita", age: 32 }, { name: "Sam", age: 39 },
    { name: "Tina", age: 20 }, { name: "Uma", age: 37 }, { name: "Vera", age: 22 },
    { name: "Will", age: 30 }, { name: "Xena", age: 28 }, { name: "Yuri", age: 27 },
    { name: "Zara", age: 26 }, { name: "Alice", age: 25 }, { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }, { name: "David", age: 35 }, { name: "Eva", age: 28 },
    { name: "Frank", age: 40 }, { name: "Grace", age: 27 }, { name: "Helen", age: 24 },
    { name: "Ian", age: 29 }, { name: "Jack", age: 31 }, { name: "Karen", age: 33 },
    { name: "Leo", age: 26 }, { name: "Mona", age: 23 }, { name: "Nancy", age: 34 },
    { name: "Oscar", age: 36 }, { name: "Paul", age: 38 }, { name: "Quincy", age: 21 },
    { name: "Rita", age: 32 }, { name: "Sam", age: 39 }, { name: "Tina", age: 20 },
    { name: "Uma", age: 37 }, { name: "Vera", age: 22 }, { name: "Will", age: 30 },
    { name: "Xena", age: 28 }, { name: "Yuri", age: 27 }, { name: "Zara", age: 26 },
    { name: "Alice", age: 29 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 },
    { name: "Alice", age: 29 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 },
    { name: "David", age: 31 }, { name: "Eva", age: 32 }, { name: "Frank", age: 40 },
    { name: "Grace", age: 27 }, { name: "Helen", age: 24 }, { name: "Ian", age: 29 },
    { name: "Jack", age: 34 }, { name: "Karen", age: 33 }, { name: "Leo", age: 26 },
    { name: "Mona", age: 23 }, { name: "Nancy", age: 34 }, { name: "Oscar", age: 36 },
    { name: "Paul", age: 38 }, { name: "Quincy", age: 21 }, { name: "Rita", age: 32 },
    { name: "Paul", age: 38 },
];


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


//     users.forEach((user) => {
//     let divUser = document.createElement('div')
//         divUser.classList.add('div-user')
//         divUser.innerText = `name: ${user.name}, age: ${user.age}`
//         divArr.appendChild(divUser)
// })

let divUsers = document.getElementsByClassName('users')[0];
let prev = document.getElementsByClassName('prev')[0]
let next = document.getElementsByClassName('next')[0]

let currentPage = 1
let userPerPage = 10

let userDisplay = function (page) {
    let start = (page - 1) * userPerPage
    let end = page * userPerPage
    divUsers.innerHTML = ''
    let usersArr = users.slice(start, end)

    usersArr.forEach((user) => {
    let divUser = document.createElement('div')
        divUser.classList.add('div-user')
        divUser.innerText = `name: ${user.name}, age: ${user.age}`
        divUsers.appendChild(divUser)
    })
    prev.disabled = page === 1
    next.disabled = end >= users.length
}

prev.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--
        userDisplay(currentPage)
    }

})
next.addEventListener('click', () => {
    if (currentPage * userPerPage < users.length) {
        currentPage++
        userDisplay(currentPage)
    }
})
userDisplay(currentPage)


