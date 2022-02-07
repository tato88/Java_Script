// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function leastNubmer(a, b, c) {
//     if ((a < b) && a < c) {
//         document.write(a)
//     } else if ((b < a) && b < c) {
//         document.write(b)
//     } else if (((c < a) && c < b)) {
//         document.write(c)
//     } else {
//         document.write('Одного найменшого числа відносно інших двох тут немає!') //ця строка - якщо введено пара або три однакових чисел
//     }
// }
//
// leastNubmer(1, 13, 6)
// document.write('<br>')

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function biggestNubmer(a, b, c) {
//     if ((a > b) && a > c) {
//         document.write(a)
//     } else if ((b > a) && b > c) {
//         document.write(b)
//     } else if (((c > a) && c > b)) {
//         document.write(c)
//     } else {
//         document.write('Одного найбільшого числа відносно інших двох тут немає!') //ця строка - якщо введено пара або три однакових чисел
//     }
// }
//
// biggestNubmer(1, 23, 16)

// - створити функцію яка повертає найбільше число з масиву
// function biggestNumArr(array) {
//     let bigNum = array[0]
//     for (let arrayElement of array) {
//         if (bigNum < arrayElement) {
//             bigNum = arrayElement
//         }
//     }
//     return bigNum
// }
//
// let arr23 = [2, 34, 523, 32, 123, 65]
// console.log(biggestNumArr(arr23))

// - створити функцію яка повертає найменьше число з масиву
// function leastNumArr(array) {
//     let bigNum = array[0]
//     for (let arrayElement of array) {
//         if (bigNum > arrayElement) {
//             bigNum = arrayElement
//         }
//     }
//     return bigNum
// }
//
// let arr24 = [2, 34, 523, 32, 123, 65]
// console.log(leastNumArr(arr24))


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function summElemArr(array) {
//     let result = 0
//     for (let i = 0; i < array.length; i++) {
//         result += array[i]
//     }
//     return result
// }
//
// console.log(summElemArr([1, 2, 10]))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function midElemArr(array) {
//     let result = 0
//     for (let i = 0; i < array.length; i++) {
//         result += array[i]
//     }
//     result /= array.length
//     return result
// }
//
// console.log(midElemArr([1, 4, 10]))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function leastBiggestNumArr(...numbers) {
//     let bigNum1 = numbers[0]
//     for (let arrayElement of arguments) {
//         if (bigNum1 < arrayElement) {
//             bigNum1 = arrayElement
//         }
//     }
//     let leastNum1 = numbers[0]
//     for (let arrayElement of arguments) {
//         if (leastNum1 > arrayElement) {
//             leastNum1 = arrayElement
//         }
//     }
//
//     document.write(bigNum1)
//     return leastNum1
// }
//
// console.log(leastBiggestNumArr(1, 2, 3))

// - створити функцію яка заповнює масив рандомними числами
// function randomNumArr(array, repeat) {
//     for (let i = 0; i < repeat; i++) {
//         array[i] = Math.floor(Math.random() * 100);
//     }
//     return array
// }
//
// let array88 = []
// console.log(randomNumArr(array88, 5))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomNumArr(array, repeat, limit) {
//     for (let i = 0; i < repeat; i++) {
//         array[i] = Math.floor(Math.random() * limit);
//     }
//     return array
// }
//
// let array48 = []
// console.log(randomNumArr(array48, 5, 4))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function ritar(array) {
//     let neWrandomArry = []
//     j = 0
//
//     for (let i = array.length - 1; i >= 0; i--) {
//         neWrandomArry[j] = array[i];
//         j++
//     }
//     return neWrandomArry
// }
//
// let randomArry = [12, 23, 34, 4, 24]
// console.log(ritar(randomArry))