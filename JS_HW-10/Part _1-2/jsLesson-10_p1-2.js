// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.forms.f1

form.onsubmit = function (e) {
    e.preventDefault()
    let userName = this.name.value
    let userSurname = this.surname.value
    let userAge = this.age.value
    let divBox = document.createElement('div')

    let users = {name: userName, surname: userSurname, age: userAge}
    document.body.appendChild(divBox)
    for (const key in users) {
        let p = document.createElement('p')
        p.innerText = `${key}: ${users[key]}`
        console.log(`${key}: ${users[key]}`)
        divBox.appendChild(p)
    }
}
// ==========================



// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let divNum = document.createElement('div')
document.body.appendChild(divNum)
divNum.innerText = localStorage.getItem('number') || 0
localStorage.setItem('number', `${divNum.innerText}`)
let getLocNum = localStorage.getItem('number')
divNum.innerText = +getLocNum + 1
localStorage.setItem('number', `${divNum.innerText}`)




