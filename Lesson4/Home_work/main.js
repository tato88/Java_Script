// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function squareTriangle(a, b) {
    result = a * b
    return result
}

console.log(squareTriangle(3, 2))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// pr2
function squareСircle(r) {
    result = 3.14 * r * r
    return result
}

console.log(squareСircle(3))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 2prh
function squareCylinder(r, h) {
    result = 2 * 3.14 * r * h
    return result
}

console.log(squareCylinder(12, 32))

// - створити функцію яка приймає масив та виводить кожен його елемент
function separateArr(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

separateArr([1, 3, 4, 5])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`)
}

paragraph('okten')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(text) {
    document.write(`<ol>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ol>`)
}

list('okten')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list1(text, repeat) {
    document.write(`<ol>`)
    for (let i = 0; i < repeat; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ol>`)
}

list1('okten', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listForArr(arr) {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
}

listForArr(['adsasd', 3, true, 5])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr1 = [{id: 1, name: 'andrii', age: 33}, {id: 2, name: 'orest', age: 23}, {id: 3, name: 'igor', age: 43}]

function cardArr1(array) {
    for (const arrayElement of array) document.write(`<div>${arrayElement.id}. ${arrayElement.name} - ${arrayElement.age}</div>`)
}
cardArr1(arr1)
