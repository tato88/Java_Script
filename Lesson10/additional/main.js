// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.addEventListener('click', (e) => {
//     console.log(`tag: ${e.target.tagName}`)
//     console.log(`classes: ${e.target.classList}`)
//     console.log(`id: ${e.target.id}`)
//     console.log(`size: ${e.target.clientWidth} * ${e.target.clientHeight}`)
// })

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// function hiddenF(popup) {
//     popup.classList.add('hidden')
// }
//
// let pageReader = () => {
//     document.addEventListener('click', (e) => {
//         let popup = document.createElement('div')
//         popup.classList.add('popup')
//         popup.innerText = `tag: ${e.target.tagName} , classes: ${e.target.classList} , id: ${e.target.id} , size: ${e.target.clientWidth} * ${e.target.clientHeight}`
//         popup.style.top = `${e.clientX}px`
//         popup.style.left = `${e.clientY}px`
//         document.body.append(popup)
//         // цей рядок не працює, може я погано розібрався з сеттаймаут...дів створюється , але одразу з класом хідден чомусь
//         // window.setTimeout(hiddenF(popup), 100000)
//     })
// }
// pageReader()

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let newArray = usersWithAddress
let userBox = document.getElementById('usersBox')
let inpFalse = document.getElementById('inp1')
let inp29 = document.getElementById('inp2')
let inpKyiv = document.getElementById('inp3')

for (let user of newArray) {
    let userDiv = document.createElement('div')
    userDiv.innerText = `${user.id},${user.name},${user.age},${user.status},${user.address.city},${user.address.street},${user.address.number}`
    userBox.append(userDiv)
}
let functionForm = () => {
    let newArray = usersWithAddress
    if (inpFalse.checked) {
        oldDiv = userBox.querySelectorAll('div');
        for (let i = 0, len = oldDiv.length; i < len; i++) {
            oldDiv[i].parentNode.removeChild(oldDiv[i]);
        }
        newArray = newArray.filter(value => !value.status)
        for (let user of newArray) {
            let userDiv = document.createElement('div')
            userDiv.innerText = `${user.id},${user.name},${user.age},${user.status},${user.address.city},${user.address.street},${user.address.number}`
            userBox.append(userDiv)
        }
        if (!inpFalse.checked) {
            oldDiv = userBox.querySelectorAll('div');
            for (let i = 0, len = oldDiv.length; i < len; i++) {
                oldDiv[i].parentNode.removeChild(oldDiv[i]);
            }

            for (let user of newArray) {
                let userDiv = document.createElement('div')
                userDiv.innerText = `${user.id},${user.name},${user.age},${user.status},${user.address.city},${user.address.street},${user.address.number}`
                userBox.append(userDiv)
            }
        }
    }
    if (inp29.checked) {
        oldDiv = userBox.querySelectorAll('div');
        for (let i = 0, len = oldDiv.length; i < len; i++) {
            oldDiv[i].parentNode.removeChild(oldDiv[i]);
        }
        newArray = newArray.filter(value => value.age > 28)
        for (let user of newArray) {
            let userDiv = document.createElement('div')
            userDiv.innerText = `${user.id},${user.name},${user.age},${user.status},${user.address.city},${user.address.street},${user.address.number}`
            userBox.append(userDiv)
        }
    }
    if (!inp29.checked) {
        oldDiv = userBox.querySelectorAll('div');
        for (let i = 0, len = oldDiv.length; i < len; i++) {
            oldDiv[i].parentNode.removeChild(oldDiv[i]);
        }

        for (let user of newArray) {
            let userDiv = document.createElement('div')
            userDiv.innerText = `${user.id},${user.name},${user.age},${user.status},${user.address.city},${user.address.street},${user.address.number}`
            userBox.append(userDiv)
        }
    }

    if (inpKyiv.checked) {
        oldDiv = userBox.querySelectorAll('div');
        for (let i = 0, len = oldDiv.length; i < len; i++) {
            oldDiv[i].parentNode.removeChild(oldDiv[i]);
        }
        newArray = newArray.filter(value => value.address.city === 'Kyiv')
        for (let user of newArray) {
            let userDiv = document.createElement('div')
            userDiv.innerText = `${user.id},${user.name},${user.age},${user.status},${user.address.city},${user.address.street},${user.address.number}`
            userBox.append(userDiv)
        }
    }
    if (!inpKyiv.checked) {
        oldDiv = userBox.querySelectorAll('div');
        for (let i = 0, len = oldDiv.length; i < len; i++) {
            oldDiv[i].parentNode.removeChild(oldDiv[i]);
        }

        for (let user of newArray) {
            let userDiv = document.createElement('div')
            userDiv.innerText = `${user.id},${user.name},${user.age},${user.status},${user.address.city},${user.address.street},${user.address.number}`
            userBox.append(userDiv)
        }
    }
}


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

//  карусель прикольно працює :)

// let butBack = document.createElement('button')
// butBack.innerText = 'Back'
// butBack.classList.add('absoluteB')
// document.body.append(butBack)
// let butNext = document.createElement('button')
// butNext.innerText = 'Next'
// butNext.classList.add('absoluteN')
// document.body.append(butNext)
// let imgArray = ['<img src="img/img1.png" alt="">', '<img src="img/img2.png" alt="">', '<img src="img/img3.png" alt="">', '<img src="img/img4.png" alt="">', '<img src="img/img5.png" alt="">']
// let marker = 0
// console.log(marker)
// let imgCreate = document.createElement('div')
// imgCreate.innerHTML = imgArray[marker]
// document.body.append(imgCreate)
// butNext.addEventListener('click', (e) => {
//     if (marker < imgArray.length - 1) {
//         marker += 1
//         imgCreate.innerHTML = imgArray[marker]
//         document.body.append(imgCreate)
//
//     } else {
//         marker = 0
//         imgCreate.innerHTML = imgArray[marker]
//         document.body.append(imgCreate)
//     }
// })
// butBack.addEventListener('click', (e) => {
//     if (marker > 0) {
//         marker -= 1
//         imgCreate.innerHTML = imgArray[marker]
//         document.body.append(imgCreate)
//     } else {
//         marker = imgArray.length - 1
//         imgCreate.innerHTML = imgArray[marker]
//         document.body.append(imgCreate)
//     }
// })

