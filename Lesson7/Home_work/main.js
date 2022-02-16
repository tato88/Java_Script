// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }

// let user6 = new User(6, "Andrii", "liteplo", "380685013386@ex.ua", "+380685013386")
// let user1 = new User(1, "Andrii", "liteplo", "380685013386@ex.ua", "+380685013386")
// let user2 = new User(2, "Andrii", "liteplo", "380685013386@ex.ua", "+380685013386")
// let user3 = new User(3, "Andrii", "liteplo", "380685013386@ex.ua", "+380685013386")
// let user5 = new User(5, "Andrii", "liteplo", "380685013386@ex.ua", "+380685013386")
// let user7 = new User(7, "Andrii", "liteplo", "380685013386@ex.ua", "+380685013386")
// let user10 = new User(10, "Andrii", "liteplo", "380685013386@ex.ua", "+380685013386")
// let user8 = new User(8, "Andrii", "liteplo", "380685013386@ex.ua", "+380685013386")
// let user9 = new User(9, "Andrii", "liteplo", "380685013386@ex.ua", "+380685013386")
// let user4 = new User(4, "Andrii", "liteplo", "380685013386@ex.ua", "+380685013386")

// let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]

// console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(users.filter((a) => (a.id % 2 === 0)))

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(users.sort((a, b) => a.id - b.id))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client (id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }


let clients = [
    new Client(1, 'Andrii', 'Liteplo', '380685013386@ex.ua', '+380685013386', ["order1", "order2"]),
    new Client(3, 'Andrii', 'Liteplo', '380685013386@ex.ua', '+380685013386', ["order1", "order2", "order3", "order4"]),
    new Client(2, 'Andrii', 'Liteplo', '380685013386@ex.ua', '+380685013386', ["order1", "order2"]),
    new Client(4, 'Andrii', 'Liteplo', '380685013386@ex.ua', '+380685013386', ["order1", "order2"]),
    new Client(5, 'Andrii', 'Liteplo', '380685013386@ex.ua', '+380685013386', ["order1", "order2", "order3", "order4", "order5"]),
    new Client(6, 'Andrii', 'Liteplo', '380685013386@ex.ua', '+380685013386', ["order1", "order2"]),
    new Client(7, 'Andrii', 'Liteplo', '380685013386@ex.ua', '+380685013386', ["order1", "order2"]),
    new Client(8, 'Andrii', 'Liteplo', '380685013386@ex.ua', '+380685013386', ["order1"]),
    new Client(9, 'Andrii', 'Liteplo', '380685013386@ex.ua', '+380685013386', ["order1", "order2"]),
    new Client(10, 'Andrii', 'Liteplo', '380685013386@ex.ua', '+380685013386', ["order1", "order2"])
]
console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a,b)=>a.order.length-b.order.length))
