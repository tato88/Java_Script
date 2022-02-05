// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let arr1 = [];
// for (i = 0; i < 50; i++) {
//     do {
//         x = Math.floor(Math.random() * 100)
//     } while ((x % 2 === 1))
//     arr1[i] = x;
// }
// console.log(arr1)

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let arr2 = [];
// for (i = 0; i < 50; i++) {
//     do {
//         x = Math.floor(Math.random() * 100)
//     } while ((x % 2 === 0))
//     arr2[i] = x;
// }
// console.log(arr2)

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arr3 = [];
// for (i = 0; i < 20; i++) {
//     x = Math.floor(Math.random() * 100)
//     arr3[i] = x;
// }
// console.log(arr3)

//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr4 = [];
// for (i = 0; i < 20; i++) {
//     x = Math.floor(Math.random() * 732 + 8)
//     arr4[i] = x;
// }
// console.log(arr4)


// 2. Вивести за допомогою console.log кожен третій елемен

// let arr5 = [];
// for (i = 0; i < 20; i++) {
//     x = Math.floor(Math.random() * 732 + 8)
//     arr5[i] = x;
//     if (i % 3 === 2) {
//         console.log(arr5[i])
//     }
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let arr5 = [];
// for (i = 0; i < 20; i++) {
//     x = Math.floor(Math.random() * 732 + 8)
//     arr5[i] = x;
//     if (i % 3 === 2) {
//         if (x % 2 === 0) {
//         console.log(arr5[i])
//         }
//     }
// }
// console.log(arr5)

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arr5 = [];
// let arr6 = [];
// i1 = 0;
// for (i = 0; i < 20; i++) {
//     x = Math.floor(Math.random() * 732 + 8)
//     arr5[i] = x;
//     if (i % 3 === 2) {
//         if (x % 2 === 0) {
//             console.log(arr5[i]);
//             arr6[i1] = x;
//             ++i1;
//         }
//     }
// }
// console.log(arr5)
// console.log(arr6)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr7 = [];
// for (i = 0; i < 20; i++) {
//     x = Math.floor(Math.random() * 732 + 8);
//     arr7[i] = x;
// }
// let arr8 = [];
// i1 = 0;
// for (i = 0; i < arr7.length; i++) {
//     if (arr7[i + 1] % 2 === 0) {
//         arr8[i1] = arr7[i]
//         i1++;
//     }
// }
// console.log(arr7)
// console.log(arr8) //запакував ці числа в окремий масив

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arr9 = [100,250,50,168,120,345,188];
// x=0
// for (i=0;i<arr9.length;i++){
//     x+=arr9[i]
// }
// average = x / arr9.length
// console.log(arr9)
// console.log(average)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arr10 = [];
// for (i = 0; i < 100; i++) {
//     arr10[i] = Math.floor(Math.random() * 100)
// }
// console.log(arr10)
// let arr11 = [];
// for (i = 0; i < arr10.length; i++) {
//     arr11[i] = arr10[i] * 5
// }
// console.log(arr11)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr12 = ['fsasf', 123, true, 'rds2', 34, 342]
// let arr13 = []
// i1=0
// for (i=0;i<arr12.length;i++){
//     if (typeof (arr12[i]) === 'number'){
//         arr13[i1] = arr12[i]
//         i1++
//     }
// }
// console.log(arr13)

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let cities = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = []
let adress = [cities[1].country, cities[1].city]
usersWithCities[0].id = users[0].id
usersWithCities[0].adress = adress

console.log(usersWithCities)

//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.