// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let findTinyNum = (a, b, c) => {
//     if ((a < b) && (a < c)) document.write(a)
//     else if ((b < a) && (b < c)) document.write(b)
//     else if ((c < b) && (c < a)) document.write(c)
//     else document.write('there is no unique Tiny number')
// }
// let a = prompt('1 numbers')
// let b = prompt('2 numbers')
// let c = prompt('3 numbers')
// findTinyNum(a, b, c)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let findBiggestNum = (a, b, c) => {
//     if ((a > b) && (a > c)) document.write(a)
//     else if ((b > a) && (b > c)) document.write(b)
//     else if ((c > b) && (c > a)) document.write(c)
//     else document.write('there is no unique biggest number')
// }
// let a = prompt('1 numbers')
// let b = prompt('2 numbers')
// let c = prompt('3 numbers')
// findBiggestNum(a, b, c)

// - створити функцію яка повертає найбільше число з масиву

// let arr4 = [387, 482, 4562, 342, 34, 2, 45462]
// let biggestOfArray = array => {
//     x = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (x < array[i]) x = array[i]
//     }
//     return x
// }
// document.write(biggestOfArray(arr4))

// - створити функцію яка повертає найменьше число з масиву

// let arr4 = [387, 482, -4562, 342, 34, 2, 45462]
// let tinyOfArray = array => {
//     x = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (x > array[i]) x = array[i]
//     }
//     return x
// }
// document.write(tinyOfArray(arr4))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr5 = [1, 2, 10]
// let sumArr = array => {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     return sum
// }
// document.write(sumArr(arr5))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr5 = [1, 2, 10]
// let sumArr = array => {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     return sum/array.length
// }
// document.write(sumArr(arr5))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let wtf = (...array) => {
//     x = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (x < array[i]) x = array[i]
//     }
//     document.write(x)
//     x = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (x > array[i]) x = array[i]
//     }
//     return x
// }
// console.log(wtf(1, 2, 4665, 75, 54, 65, 6, 5))

// - створити функцію яка заповнює масив рандомними числами

// let arr6 = []
// let randomNumArr = (array, repeat, rangeFrom, rangeBy) => {
//     for (let i = 0; i < repeat; i++) {
//         array[i] = Math.floor(Math.random() * (rangeBy + 1 - rangeFrom) + rangeFrom)
//     }
// }
// randomNumArr(arr6, 5, 20, 25)
// document.write(arr6)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// в попередньому експерементував і зробив це :)))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let ritar = array => {
//     let newArr = []
//     for (let j = 0, i = array.length - 1; i >= 0; j++, i--) {
//         newArr[j] = array[i]
//     }
//     return newArr
// }
// let arr8 = [1, 2, 3, 4, 5, 6]
// document.write(ritar(arr8))