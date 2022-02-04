// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr1 = [1, 2, 3, 4, 5]
// for (i of arr1){
//     console.log(i)
// }
// let arr2 = ['asdafs', 'fsafgf', 'asfsaf', 'fssaasf', 'gfgf']
// for (i of arr2){
//     console.log(i)
// }
// let arr3 = [4242, 'sasdf', 3, 'fdfdsfds', true]
// for (i of arr3){
//     console.log(i)
// }


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr4 = [];
// arr4[0] = 23
// arr4[5] = 'asfasf'
// arr4[6] = true
// arr4[12] = 23
// console.log(arr4)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let i = 0
// for (i=0; i<11; i++){
//     document.write('<div>Lorem</div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// let i = 0
// document.write('<ol>')
// for (i=0; i<11; i++){
//     document.write('<li><div>Lorem</div></li>')   //Тут запитання : я правильно зрозумів який індекс вимагається? мова йде про лішки??
// }
// document.write('</ol>')

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0
// for (i=0; i<21; i++){
//     document.write('<h1>Lorem</h1>')
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0
// document.write('<ol>')
// for (i=0; i<11; i++){
//     document.write('<li><h1>Lorem</h1></li>')   // Аналогічне запитання про індекси
// }
// document.write('</ol>')


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [12, 14, 523, 6345, 23, 745, 2345, 25, 624, 24]
// for (i=0; i< arr.length; i++){
//     x = arr[i]
//     console.log(x)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['gjfs', 'sjg', 'dsg', 'ghhg', 'khkhg', 'djgj', 'dhgj', 'jhfhs', 'sfh', 'shg' ]
// for (i=0; i< arr.length; i++){
//     x = arr[i]
//     console.log(x)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = ['hfdfdh', false, 54543, 213, true, 'djgj', 213, 'jhfhs', true, 'shg' ]
// for (i=0; i< arr.length; i++){
//     x = arr[i]
//     console.log(x)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = ['hfdfdh', false, 54543, 213, true, 'djgj', 213, 'jhfhs', true, 'shg' ]
// for (i=0; i< arr.length; i++){
//     x = arr[i]
//     if (typeof (x) === "boolean"){
//         console.log(x)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = ['hfdfdh', false, 54543, 213, true, 'djgj', 213, 'jhfhs', true, 'shg' ]
// for (i=0; i< arr.length; i++){
//     x = arr[i]
//     if (typeof (x) === "number"){
//         console.log(x)
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = ['hfdfdh', false, 54543, 213, true, 'djgj', 213, 'jhfhs', true, 'shg' ]
// for (i=0; i< arr.length; i++){
//     x = arr[i]
//     if (typeof (x) === "string"){
//         console.log(x)
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 'hgjgf';
// arr[1] = 'jg';
// arr[2] = true;
// arr[3] = false;
// arr[4] = 643643;
// arr[5] = 'hgf';
// arr[6] = true;
// arr[7] = 'gdds';
// arr[8] = 9876;
// arr[9] = false;
// for (i=0;i<arr.length;i++){
//     x = arr[i]
//     console.log(x)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i=1;i<11;i++) {
//     document.write(i)
//     console.log(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i=1;i<101;i++) {
//     document.write(i)
//     console.log(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// let x = 0
// for (i=1;i<201;i=i+2) {
//     ++x
//     document.write(x)
//     console.log(x)
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (i=1;i<101;i++) {
//     x = i % 2
//     if (x === 0) {
//         document.write(i)
//         console.log(i)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (i=1;i<101;i++) {
//     x = i % 2
//     if (x != 0) {
//         document.write(i)
//         console.log(i)
//     }
// }