// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

console.log(document.getElementById('content').innerText)

// -- отримує текст з блоку з id "rules"

console.log(document.getElementById('rules').innerText)

// -- замініть текст параграфа з id 'content' на будь-який інший

document.getElementById('content').innerText = 'hello'

// -- замініть текст параграфа з id 'rules' на будь-який інший

document.getElementById('rules').innerText = 'world'

// -- змініть кожному елементу колір фону на червоний

let elementsBody = document.body.children
for (let bodyElement of elementsBody) {
    bodyElement.style.background = 'red'
}

// -- змініть кожному елементу колір тексту на синій

let bodyItems = document.body.children
for (let bodyItem of bodyItems) {
    bodyItem.style.color = 'blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(document.getElementById('rules').classList)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let itemsFcRules = document.getElementsByClassName('fc_rules')
for (let item of itemsFcRules) {
    item.style.color = 'red'
}