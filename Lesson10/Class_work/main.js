// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let mainDiv = document.createElement('div')
// mainDiv.classList.add('mainDiv')
// document.body.append(mainDiv)
// let form1 = document.createElement('form')
// mainDiv.append(form1)
// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// form1.append(input1, input2)
// let form2 = document.createElement('form')
// mainDiv.append(form2)
// let input3 = document.createElement('input')
// let input4 = document.createElement('input')
// form2.append(input3, input4)
//
// let but = document.createElement('button')
// but.style.width = '100px'
// but.innerText = 'mix'
// but.onclick = function () {
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input3.value);
//     console.log(input4.value);
// }
// mainDiv.append(but)


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// let input3 = document.createElement('input')
// let but = document.createElement('button')
// but.innerText = 'create table'
// but.onclick = function () {
//     let table = document.createElement('table')
//     table.style.border = '1px solid gray'
//     table.style.margin = '10px'
//     document.body.append(table)
//     for (let i = 0; i < input1.value; i++) {
//         let tr = document.createElement('tr')
//         for (let j = 0; j < input2.value; j++) {
//             let td = document.createElement('td')
//             td.style.border = '1px solid green'
//             td.innerText = input3.value
//             tr.append(td)
//         }
//
//         table.append(tr)
//     }
// }
// document.body.append(input1, input2, input3, but)

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let censors = ['fuck', 'suck', 'ass']
let input = document.createElement('input')
document.body.append(input)
let but = document.createElement('button')
but.innerText = 'check mates'
document.body.append(but)
but.addEventListener('click', () => {
    for (let i = 0; i < censors.length; i++) {
        if (input.value === censors[i]) {
            alert('OPAPA')
        }
    }
})

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let censors = ['fuck', 'suck', 'ass']
// let input = document.createElement('input')
// document.body.append(input)
// let but = document.createElement('button')
// but.innerText = 'check mates'
// document.body.append(but)
// but.addEventListener('click', () => {
//     let inputWords = input.value.split(' ')
//     for (const inputWord of inputWords) {
//         for (let i = 0; i < censors.length; i++) {
//             if (inputWord === censors[i]) {
//                 alert('OPAPA')
//             }
//         }
//     }
// })