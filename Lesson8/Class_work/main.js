// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header


// document.getElementById('main_header').classList.add('dec1221')
// console.log(document.getElementById('main_header').classList)

// b) робить шириниу елементу ul 400px

// document.getElementsByTagName('ul')[0].style.width = '400px'

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let liLi = document.getElementsByClassName('linkList')
// for (let liLiElement of liLi) {
//     liLiElement.style.width = '50%'
//     liLiElement.style.borderBottom = '1px solid gray' // audit
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// console.log(document.getElementsByClassName('listElement2')[0].innerText)

// e) отримує всі елементи li та змінює ім колір фону на сірий

// for (let liElement of document.getElementsByTagName('li')) {
//     liElement.style.background = 'gray'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// for (let aElement of document.getElementsByTagName('a')) {
//     aElement.classList.add('anchar')
//     console.log(aElement)
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів


// for (let aElement of document.getElementsByTagName('a')) {
//     if (aElement.innerText === 'link3') {
//         aElement.style.fontSize = "40px"
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// for (let i = 0; i < document.getElementsByTagName('a').length; i++) document.getElementsByTagName('a')[i]
//     .classList.add(`${document.getElementsByTagName('a')[i].innerText}`)
//  console.log(document.getElementsByTagName('a')[0])  // audit

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let bgcol = prompt('wich color?')

// for (let subHeaderElement of document.getElementsByClassName('sub-header')) subHeaderElement.style.background = prompt(`wich color?`)


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// for (const shElement of document.getElementsByClassName('sub-header')) {
//     if (shElement.innerText === 'content 2 segment') {
//         shElement.style.color = prompt('color?')
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// document.getElementsByClassName('content_1')[0].innerText = prompt('text?')

// l) отримати елементи p та змінити їм padding на 20px

// for (let pElement of document.getElementsByTagName('p')) pElement.style.padding = "20px"

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// for (let i = 0; i < document.getElementsByClassName('text2').length; i++) document.getElementsByClassName('text2')[i]
//     .innerText = 'dec-2021'