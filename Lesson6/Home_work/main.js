// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'jacascript is cool'
// let length = (a) => {
//     console.log(a.length)
// }
// length(c)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let upperCase = (a) => {
//     console.log(a.toUpperCase())
// }
// upperCase(c)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let lowerCase = (a) => {
//     console.log(a.toLowerCase())
// }
// lowerCase(c)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// let str = 'Каждый охотник желает знать';
// let stringToarray = array => array.split(' ')
// let arr = stringToarray(str);
// document.writeln(arr);// ['Каждый', 'охотник', 'желает', 'знать']

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// document.writeln(str.slice(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => str.substr(0, length)
// document.writeln(delete_characters(str, 7)); // Каждый


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = str => str.toUpperCase().replaceAll(' ','-')
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = "hTML JavaScript PHP";
// let ucFirst = str => str.charAt(0).toUpperCase(str) + str.slice(1)
// document.writeln(ucFirst(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'qwer asdf zxcv'
// let capitalize = str => {
//     return str.split(' ').map(elem => elem.charAt(0).toUpperCase() + elem.slice(1)).join(' ');
// }
// console.log(capitalize(str))
