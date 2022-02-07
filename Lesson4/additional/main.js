// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function sumArgs(...elements) {
    let result = 0
    for (let i = 0; i < elements.length; i++) {
        result += elements[i]
    }
    return result
}

console.log(sumArgs(1, 'asd', true))

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function sumArrs(arr1, arr2) {
    let arr3 = []
    for (let i = 0; i < arr1.length; i++) {
        arr3[i] = arr1[i] + arr2[i]
    }
    return arr3
}

let ar1 = [1, 2, 3, 4]
let ar2 = [2, 3, 4, 5]

console.log(sumArrs(ar1, ar2))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function keyBack(array) {
//     let keysArray = []
//     i = 0
//     for (let arrayElement of array) {
//         for (let key in arrayElement) {
//             keysArray[i] = key
//             i++
//         }
//     }
//     return keysArray
// }
//
// let arrayDrivers = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// console.log(keyBack(arrayDrivers))


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function keyBack(array) {
    let keysArray = []
    i = 0
    for (let arrayElement of array) {
        for (let key in arrayElement) {
            keysArray[i] = arrayElement[key]
            i++
        }
    }
    return keysArray
}

let arrayDrivers = [{name: 'Dima', age: 13}, {model: 'Camry'}]
console.log(keyBack(arrayDrivers))
