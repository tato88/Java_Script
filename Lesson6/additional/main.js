//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) => {
//     let newStr = []
//     while (str.length) {
//         newStr.push(str.substr(0, n))
//         str = str.slice(n)
//     }
//     return newStr
// }
// document.writeln(cutString('наслаждение', 3)) // [нас,лаж,ден,ие]

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

let emailCheker = (email) => {
    let lowerCase = email.toLowerCase()
    let indexDog = lowerCase.indexOf('@')
    let indexPoint = lowerCase.indexOf('.')
    if (lowerCase.split('@')[0] && lowerCase.includes('@') && lowerCase.includes('.') && indexDog < indexPoint - 2) {
        document.write('good email')
    } else (document.write('wrong email'))
}
emailCheker('someeMAIL@i.ua')


// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let sort = (coursesArray) => {
//     return coursesArray.sort((a, b) => a.modules.length - b.modules.length)
// }
// console.log(sort(coursesArray))


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.

// let symb = "о"
// let str = "Астрономия это наука о небесных объектах"

// let count = (str, stringsearch) => {
// let k = 0
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === stringsearch) {
//         k++
//     }
// }
// return k
// }
// document.writeln(count(str, symb)) // 5

// через цикли легше мені це усвідомлювати поки що, тому не одразу дійшло як тут методи запровадити =)))

// let anotherTry = (str, stringsearch) => {
//     return str.split('').filter((letter) => letter === symb).length
// }
// document.writeln(anotherTry(str, symb)) // 5


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.

// let str = "Сила тяжести приложена к центру масс тела";
// let cutString = (str, n) => {
//     let newStr = []
//     for (let i = 0; i < n; i++) {
//         newStr[i] = str.split(' ')[i]
//     }
//     newStr = newStr.join(' ')
//     return newStr
// }
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

//знову ж таки ... =)))

// let anotherTry = (str, n) =>{
//     let newStr = str.split(' ').slice(0,n).join(' ')
//     return newStr
// }
// document.write(anotherTry(str,5))
