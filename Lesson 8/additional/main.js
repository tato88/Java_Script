// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

// let listOfClasses = []
// let findClasses = (argument) => {
//     for (let argumentElement of argument) {
//         for (let classListElement of argumentElement.classList) {
//             listOfClasses.push(classListElement)
//         }
//         findClasses(argumentElement.children)
//     }
//     return (listOfClasses.filter((item, index) => {  // прибираємо однакові класи
//             return listOfClasses.indexOf(item) === index;
//         })
//     )
// }
// console.log(findClasses(document.body.children))


// with out recursion:
// let listOfClasses = []
// for (let divElement of document.getElementsByTagName('div')) {
//     for (let i = 0; i < divElement.classList.length; i++) {
//         listOfClasses.push(divElement.classList[i])
//     }
// }
// console.log((listOfClasses.filter((item, index) => {  // прибираємо однакові класи
//         return listOfClasses.indexOf(item) === index;
//     })
// ))