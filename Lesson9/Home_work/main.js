// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div')
// div.classList.add('wrap')
// div.classList.add('collapse')
// div.classList.add('alpha')
// div.classList.add('beta')
// div.style.background = 'red'
// div.style.border = '1px solid black'
// div.style.width = '200px'
// div.style.color = 'white'
// div.style.fontSize = '20px'
// div.innerText = 'asd'
// document.body.append(div)
// let div2 = div.cloneNode(true)
// document.body.append(div2)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let array = ['Main', 'Products', 'About us', 'Contacts']
// let menu = document.body.getElementsByClassName('menu')[0]
//
// function listAdd(someArray) {
//     for (let i = 0; i < someArray.length; i++) {
//         let liElement = document.createElement('li')
//         liElement.innerText = someArray[i]
//         menu.append(liElement)
//     }
// }
// listAdd(array)

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let divCreator = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         let blockElement = document.createElement('div')
//         blockElement.innerText = `course ${array[i].title} - ${array[i].monthDuration} month`
//         document.body.append(blockElement)
//     }
// }
// divCreator(coursesAndDurationArray)


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let cardCreator = (array) => {
    for (let i = 0; i < array.length; i++) {
        let card = document.createElement('div')
        card.classList.add('item')
        document.body.append(card)
        let cardh2 = document.createElement('h2')
        cardh2.innerText = `${array[i].title}`
        cardh2.classList.add('heading')
        card.append(cardh2)
        let duration = document.createElement('p')
        duration.innerText = `${array[i].monthDuration} Month`
        duration.classList.add('description')
        card.append(duration)
    }
}
cardCreator(coursesAndDurationArray)
