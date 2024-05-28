// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let buttonClear = document.getElementById('clear')
let divText = document.getElementById('text')
buttonClear.addEventListener('click', () =>{
    divText.remove()
})

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageInput = document.getElementById('age')
let btnAudit = document.getElementById('audit')

btnAudit.addEventListener('click', () => {
    if (ageInput.value < 18) {
        alert('Малий, приходи коли тобі виповниться 18')
    }else {
        alert('Ну добре, можеш грати в нашому казино ;)')
    }
})

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let formThreeInput = document.getElementsByClassName('form-three-input')[0]


let f1 = document.forms.f1
f1.onsubmit = function (e) {
    e.preventDefault()
    formThreeInput.innerHTML = ''
    // console.log({name: this.colum.value})
    for (let i = 0; i < +this.colum.value; i++) {
        let newDivColum = document.createElement('div')
        formThreeInput.appendChild(newDivColum)
        newDivColum.innerHTML = ''
        for (let i = 0; i < +this.wrap.value; i++) {
            let newDivWrap = document.createElement('div')
            newDivColum.appendChild(newDivWrap)
            let p = document.createElement('p')
            p.innerHTML = this.text.value
            newDivWrap.appendChild(p)
        }
    }

}


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається