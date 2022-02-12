// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let cleanNames = (name, symbol) => {
//     let newName = []
//     let x = name.split(symbol)
//     x.forEach((value) => {
//         if (value) newName.push(value)
//     })
//     console.log(newName.join(' '))
// }
// cleanNames(n1, '.')
// cleanNames(n2, '-')
// cleanNames(n3, '_')


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomArr = (length, rangeR) => {
    let array = []
    for (let i = 0; i < length; i++) {
        array.push((Math.round(Math.random() * rangeR)))
    }
    return array
}
console.log(randomArr(5, 100))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

console.log(randomArr(10, 100).sort((a, b) => a - b))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

console.log(randomArr(20, 100).filter((number) => number % 2 === 0))

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

console.log(randomArr(10, 100).map((number) => number + ''))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let nums = [11, 21, 3];
let sortNums = (direction, array) => {
    if (direction === "ascending") {
        return array.sort((a, b) => a - b)
    }
    if (direction === "descending") {
        return array.sort((a, b) => b - a)
    }
}

console.log(sortNums('ascending', nums)) // [3,11,21])
console.log(sortNums('descending', nums)) // [3,11,21])


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))
console.log(coursesAndDurationArray.filter((user) => user.monthDuration > 5))
