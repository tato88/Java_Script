// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

let squareRectangle = (a, b) => a * b
console.log(squareRectangle(2, 3))

// - створити функцію яка обчислює та повертає площу кола

let squareСircle = r => r * r * 3.14
console.log(squareСircle(3))

// - створити функцію яка обчислює та повертає площу циліндру

let squareCylinder = (r, h) => 2 * 3.14 * r * h
console.log(squareCylinder(3, 45))

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr1 = [1, 42, 352, 2341]
let showArray = array => {
    for (let i = 0; i < arr1.length; i++) console.log(arr1[i])
}

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let createParagraph = txt => document.write(`<p>${txt}</p>`)
createParagraph('Hello World')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUl1 = txts => document.write(`<ul><li>${txts}</li><li>${txts}</li><li>${txts}</li></ul>`)
createUl1('Lorem')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUl2 = (txts, repeatLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < repeatLi; i++) {
        document.write(`<li>${txts}</li>`)
    }
    document.write(`</ul>`)
}
createUl2('Lorem', 23)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr2 = ['adsasd', 3, true, 5]
let listForArr = array => {
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}
listForArr(['adsasd', 3, true, 5])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// document.write(`<li>${txts}</li>`)

let arr3 = [{id: 1, name: 'andrii', age: 33}, {id: 2, name: 'orest', age: 23}, {id: 3, name: 'igor', age: 43}]

let cardArr1 = array => {
    for (const arrayElement of array) document.write(`<div>${arrayElement.id}. ${arrayElement.name} - ${arrayElement.age}</div>`)
}
cardArr1(arr3)