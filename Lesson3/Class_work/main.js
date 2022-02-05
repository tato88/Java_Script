// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

//     1. перебрати його циклом while

// let i = 0
// while (i < arr.length){
//     x = arr[i]
//     console.log(x);
//     i++;
// }

//     2. перебрати його циклом for

// for (i=0;i<arr.length;i++){
//     x = arr[i]
//     console.log(x);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0
// while (i < arr.length){
//     x = arr[i]
//     if (i % 2 === 0){
//         console.log(x)
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (i=0;i<arr.length;i++){
//     x = arr[i]
//     if (i % 2 === 0){
//         console.log(x);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0
// while (i < arr.length){
//     x = arr[i]
//     if (x % 2 === 0){
//         console.log(x)
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (i=0;i<arr.length;i++){
//     x = arr[i]
//     if (x % 2 === 0){
//         console.log(x);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (i=0;i<arr.length;i++){
//     x = arr[i]
//     if (x % 3 === 0){
//         x = 'okten'
//         // arr[i] = 'okten'    - цей рядок - щоб і в масиві замінити картні 3ом на "октен"
//     }
//     console.log(x);
// }
// console.log(arr);


// 8. вивести масив в зворотньому порядку.

// for (let i = arr.length - 1; i >= 0; i--) {
//     const x = arr[i];
//     console.log(x);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let i = arr.length-1
// while ((i < arr.length) && (i > -1)){
//     x = arr[i]
//     console.log(x);
//     i--;
// }

// for (i = arr.length - 1; i > -1; i--) {
//     x = arr[i]
//     console.log(x);
// }

// let i = arr.length-1
// while (i > -1){
//     x = arr[i]
//     if (i % 2 === 0){
//         console.log(x)
//     }
//     i--;
// }

// for (i = arr.length - 1; i > -1; i--) {
//     x = arr[i]
//     if (i % 2 === 0) {
//         console.log(x);
//     }
// }

// let i = arr.length-1
// while (i > -1){
//     x = arr[i]
//     if (x % 2 === 0){
//         console.log(x)
//     }
//     i--;
// }

// for (i = arr.length - 1; i > -1; i--) {
//     x = arr[i]
//     if (x % 2 === 0) {
//         console.log(x);
//     }
// }

// for (i=arr.length-1;i> -1;i--){
//     x = arr[i]
//     if (x % 3 === 0){
//         x = 'okten'
//         // arr[i] = 'okten'    - цей рядок - щоб і в масиві замінити картні 3ом на "октен"
//     }
//     console.log(x);
// }
// console.log(arr);
