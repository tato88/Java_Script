//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = Math.floor(Math.random() * 60)
console.log(time)
if (time < 16) {
    console.log('1 четверть')
} else if ((time > 15) && (time < 31)) {
    console.log('2 четверть')
} else if ((time > 30) && (time < 46)) {
    console.log('3 четверть')
} else {
    console.log('4 четверть')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = Math.floor(Math.random() * 31 + 1)
console.log(day)
if (day < 11) {
    console.log('1 декада')
} else if ((day > 10) && (time < 21)) {
    console.log('2 декада')
} else {
    console.log('3 декада')
}

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = undefined //true
if (test === true) {
    console.log('RIGHT')
} else {
    console.log('WRONG')
}

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 1
// let a = 0
// let a = -3
if (a !== 0) {
    console.log('RIGTH')
} else {
    console.log('WRONG')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let dayOfTheWeek = prompt('What day interested?')
// switch (dayOfTheWeek) {
//     case '1':
//         document.write('OKTEN WEBinar');
//         break;
//     case '2':
//         document.write('OKTEN Seminar');
//         break;
//     case '3':
//         document.write('OKTEN WEBinar');
//         break;
//     case '4':
//         document.write('OKTEN Seminar');
//         break;
//     case '5':
//         document.write('OKTEN WEBinar');
//         break;
//     case '6':
//         document.write('ENG Lesson');
//         break;
//     case '7':
//         document.write('no tasks');
//         break;
//     default :
//         console.log('Wrong number');
//         break;
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = prompt('Year?')
// let vusokosniiChek = year % 4
// console.log(year)
// if (vusokosniiChek === 0){
//     console.log('Vysokosnyi!!!')
// }else {
//     console.log('NOT Vysokosnyi')
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let nameJs = prompt('Official name of JavaScript?')
if (nameJs === 'ECMAScript') {
    console.log('Right!')
} else {
    console.log('Dont know? ECMAScript')
}