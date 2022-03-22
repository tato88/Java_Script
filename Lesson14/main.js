// callback hell

// setTimeout(() => {
//     console.log('6:00 wake up')
//     setTimeout(() => {
//         console.log('6:15 bath room')
//         setTimeout(() => {
//             console.log('6:45 breakfast')
//             setTimeout(() => {
//                 console.log('8:30 work')
//                 setTimeout(() => {
//                     console.log('13:00 dinner')
//                     setTimeout(() => {
//                         console.log('18:00 go to home')
//                         setTimeout(()=>{
//                             console.log('22:00 go to sleep')
//                         },2000)
//                     }, 2000)
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)


// recursion

// let todo = ['7:00 wake up', '8:00 breakfast', '9:00 work', '13:00 dinner', '18:00 go home', '19:00 bath room', '20:00 youtube', '22:00 sleep']
// let counter = 0
// let schedule = function () {
//     if (counter < todo.length) {
//         setTimeout(() => {
//             console.log(todo[counter])
//             counter += 1
//             schedule()
//         }, 1000)
//     }
// }
// schedule()

// promise???

// let todo = ['7:00 wake up', '8:00 breakfast', '9:00 work', '13:00 dinner', '18:00 go home', '19:00 bath room', '20:00 youtube', '22:00 sleep']
// let counter = 0
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(todo[counter])
//         counter += 1
//         resolve(counter)
//     }, 1000)
// })
//     .then(value => {
//         setTimeout(() => {
//             return new Promise((resolve, reject) => {
//                 console.log(todo[counter])
//                 counter += 1
//                 resolve(counter)
//             })
//         }, 1000)
//     })
//     .then(value => {
//         setTimeout(() => {
//             return new Promise((resolve, reject) => {
//                 console.log(todo[counter])
//                 counter += 1
//                 resolve(counter)
//             })
//         }, 2000)
//     })
//     .then(value => {
//         setTimeout(() => {
//             return new Promise((resolve, reject) => {
//                 console.log(todo[counter])
//                 counter += 1
//                 resolve(counter)
//             })
//         }, 3000)
//     })
//     .then(value => {
//         setTimeout(() => {
//             return new Promise((resolve, reject) => {
//                 console.log(todo[counter])
//                 counter += 1
//                 resolve(counter)
//             })
//         }, 4000)
//     })
//     .then(value => {
//         setTimeout(() => {
//             return new Promise((resolve, reject) => {
//                 console.log(todo[counter])
//                 counter += 1
//                 resolve(counter)
//             })
//         }, 5000)
//     })
//     .then(value => {
//         setTimeout(() => {
//             return new Promise((resolve, reject) => {
//                 console.log(todo[counter])
//                 counter += 1
//                 resolve(counter)
//             })
//         }, 6000)
//     })
//     .then(value => {
//         setTimeout(() => {
//             return new Promise((resolve, reject) => {
//                 console.log(todo[counter])
//                 counter += 1
//                 resolve(counter)
//             })
//         }, 7000)
//     })

let todo = ['7:00 wake up', '8:00 breakfast', '9:00 work', '13:00 dinner', '18:00 go home', '19:00 bath room', '20:00 youtube', '22:00 sleep']
let counter = 0

function schedule() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (counter < todo.length) {
                console.log(todo[counter])
                counter += 1
                resolve(counter)
            } else {
                reject('something gonna wrong')

            }
        }, 1000)
    })
}

async function scheduleOn() {
    try {
        await schedule()
        await schedule()
        await schedule()
        await schedule()
        await schedule()
        await schedule()
        await schedule()
        await schedule()
        await schedule()
    } catch
        (e) {
        console.error(e)
    }
}

scheduleOn()


