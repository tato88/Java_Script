// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// document.getElementById('text').onclick = function () {
//     this.style.display = 'none'
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button1 = document.createElement('button')
// button1.innerText = 'BUTTON'
// button1.onclick = function () {
//     this.style.display = 'none'
// }
// document.body.append(button1)

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// document.getElementById('button1').onclick = function () {
//     let age = document.getElementById('age')
//     console.log(age.value);
//     if (age.value > 18) {
//         document.write('OK')
//     } else (document.write('NOT OK'))
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// document.getElementById('menu').onclick = function () {
//     document.getElementById('ul').classList.toggle('hidden')
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.

let comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem1', body: 'lorem ipsum dolo sitlorem ipsum dolo sit ameti'},
    {title: 'lorem2', body: 'lorem ipsum dolo si ipsum dolo si ipsum dolo sit ameti'},
    {title: 'lorem3', body: 'lorem ipsum dolo sit ametiametiametiametiameti'}
]

// for (let comment of comments) {
//     let div = document.createElement('div')
//     div.innerText = `${comment.title}  - ${comment.body}`
//     document.body.append(div)
// }

//     Добавьте каждому комментарию по кнопке для сворачивания его body.

for (let comment of comments) {
    let h2 = document.createElement('h2')
    h2.innerText = `${comment.title}`
    document.body.append(h2)
    let par = document.createElement('p')
    par.innerText = `${comment.body}`
    document.body.append(par)
    let but = document.createElement('button')
    but.innerText = 'hidden comment'
    but.onclick = function () {
        par.classList.toggle('hidden')
    }
    document.body.append(but)
}

