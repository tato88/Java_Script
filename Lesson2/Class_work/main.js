// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let number1 = prompt('1st number ?')
// let number2 = prompt('2nd number ?')
// if (number1 > number2){
//     console.log(number1)
// }else if (number2 > number1){
//     console.log(number2)
// }else {
//     console.log('draw')
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let apartment = prompt('apartment number? ')
// if (apartment < 21){
//     let entrance = 1
//     console.log(entrance)
// }else if ((apartment > 20) && (apartment < 50)) {
//     let entrance = 2
//     console.log(entrance)
// }else {
//     let entrance = 3
//     console.log(entrance)
// }

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = prompt('number?')
// if (number === '10'){
//     console.log('RIGHT')
// }else {
//     console.log("WRONG")
// }

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// // let x = prompt('whatever you want') - тут чомусь не працює???
// // let x = 1
// // let x = true
// // let x = 'sdadas'
// // let x = []
// let x = undefined
// if (typeof (x) === 'number'){
//     console.log('1')
// }else if (typeof (x) === 'string'){
//     console.log('2')
// }else if (typeof (x) === 'boolean'){
//     console.log('3')
// }else if (typeof (x) === 'object'){
//     console.log('4')
// }else {
//     console.log('else')
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp = Math.floor(Math.random()*55)
// console.log(temp)
// if ((temp > 9) && (temp < 23)){
//     console.log('OKTEN!')
// }else{
//     console.log('Stay Home')
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let chance = prompt(' wich one? ')
switch (chance){
    case '1':
        console.log('Auto');
        break;
    case '2':
        console.log('Moto');
        break;
    case '3':
        console.log('Phone');
        break;
    case '4':
        console.log('Trip');
        break;
    case '5':
        console.log('OKTEN webinar');
        break;
    default :
        console.log('Wrong number');
        break;
}