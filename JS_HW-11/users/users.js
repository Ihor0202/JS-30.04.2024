//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((users) => {
        console.log(users)
        users.forEach(user => {
            console.log(user)
            let usersDiv = document.createElement('div')
            usersDiv.style.margin = '20px'
            document.body.appendChild(usersDiv)

            let a = document.createElement('a')
            usersDiv.appendChild(a)
            a.innerText = `id: ${user.id} Name: ${user.name}`
            a.addEventListener('click', () => {
                localStorage.setItem('userID', user.id)
            })
            localStorage.setItem('userID', user.id)
            a.href = `user-details.html?id=${user.id}`
        })
    })