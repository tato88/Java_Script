// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, madeBy, year, maxSpeed, v) {
//     this.model = model;
//     this.madeBy = madeBy;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.v = v;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//
//     this.info = function () {
//         for (const character in this) {
//             if (typeof this[character] !== 'function') console.log(`${character}  ${this[character]}`)
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// let cars = [
//     new Car("Mustang", 'Ford', 2017, 280, 2.3),
//     new Car("Cayenne", 'Porsche', 2008, 300, 4.8),
//     new Car("x3", 'BMW', 2004, 210, 3.0)
// ]
// // console.log(cars)
// // cars[0].drive()
// cars[0].info()
// cars[0].increaseMaxSpeed(100)
// console.log(cars[0].maxSpeed)
// cars[0].changeYear(2020)
// console.log(cars[0].year)
// cars[0].addDriver('Andrii')
// cars[0].info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, madeBy, year, maxSpeed, v) {
//         this.model = model;
//         this.madeBy = madeBy;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.v = v;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//         }
//         this.info = function () {
//             for (const character in this) {
//                 if (typeof this[character] !== 'function') console.log(`${character} - ${this[character]}`)
//             }
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed += newSpeed
//         }
//         this.changeYear = function (newYear) {
//             this.year = newYear
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver
//         }
//     }
//
// }
//
// let car1 = new Car("x3", "bmw", 2004, 200, 3.0)
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(500)
// console.log(car1.maxSpeed)
// car1.changeYear(2020)
// console.log(car1.year)
// car1.addDriver('Nastya')
// console.log(car1["driver"])
// car1.info()


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince extends Cinderella {
    constructor(name, age, shoesSize) {
        super(name, age);
        this.shoesSize = shoesSize;
    }
}

let cinderellas = [
    new Cinderella('Galya', 18, 44),
    new Cinderella('Traktoryna', 18, 44),
    new Cinderella('Ira', 18, 41),
    new Cinderella('Olya', 18, 40),
    new Cinderella('Masha', 18, 40),
    new Cinderella('Nastya', 28, 38),
    new Cinderella('Katya', 18, 40),
    new Cinderella('Solomiya', 18, 41),
    new Cinderella('Tanya', 18, 46),
    new Cinderella('Travesti Diva Igor', 45, 47)
]
console.log(cinderellas)

let prince1 = new Prince('Orest', 83, 47)
console.log(prince1)

for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].footSize === prince1.shoesSize) console.log(`${prince1.name}  vs  ${cinderellas[i].name}`)
}

let findMatches = cinderellas.find((size) => (size.footSize === prince1.shoesSize))
console.log(findMatches)

