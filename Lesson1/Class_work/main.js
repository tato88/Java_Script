//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
function getRandomInt(rndm) {
    return Math.floor(Math.random() * rndm);
}

let arr = [getRandomInt(101), getRandomInt(101), getRandomInt(101), getRandomInt(101), getRandomInt(101), getRandomInt(101), getRandomInt(101), getRandomInt(101), getRandomInt(101), getRandomInt(101),]
console.log(arr)

let reuslt = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9]
console.log(reuslt)

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book1 = {
    name: 'Sherlock',
    pages: 1200,
    genre: 'detective'
}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: 'Garry Potter',
    pages: 850,
    genre: 'fantasy',
    autor: 'G.Roaling'
}

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = [book1, book2]
console.log(books[0],books[1])

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23
let width = 10
let s = height * width
console.log(s)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 23
let dC = 10
let rC = dC / 2
let PI = 3.14
let v = heightC * rC * rC * PI
console.log(v)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3
let m = 4
k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2))
console.log(k)