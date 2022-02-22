let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let addressArr = []
// for (let user of users) addressArr.push(user.address)
// console.log(addressArr)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (let user of users) {
//     let div = document.createElement('div')
//     div.innerText = `${user.name} - ${user.age} - ${user.status} - ${user.address.city} - ${user.address.country} - ${user.address.street} - ${user.address.houseNumber}`
//     document.body.append(div)
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

// for (let user of users) {
//     let userBox = document.createElement('div')
//     document.body.append(userBox)
//     for (let userElement in user) {
//         if (typeof (user[userElement]) !== `object`){
//             let userElementDiv = document.createElement('div')
//             userElementDiv.innerText = `${userElement} - ${user[userElement]}`
//             userBox.append(userElementDiv)
//         }else {
//             let userElementDiv = document.createElement('div')
//             userElementDiv.innerText = `${userElement}`
//             userBox.append(userElementDiv)
//         }
//     }
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let user of users) {
//     let userList = document.createElement('ul')
//     document.body.append(userList)
//     for (let userElement in user) {
//         if (userElement !== 'address') {
//             let userLi = document.createElement('li')
//             userLi.innerText = `${userElement} : ${user[userElement]}`
//             userList.append(userLi)
//         } else if (userElement === 'address') {
//             let userLi = document.createElement('li')
//             userLi.innerText = 'address: '
//             userList.append(userLi)
//             let addressList = document.createElement('ul')
//             userLi.append(addressList)
//             for (let itemAddress in user[userElement]) {
//                 let addressLi = document.createElement('li')
//                 addressLi.innerText = `${itemAddress} : ${user[userElement][itemAddress]}`
//                 addressList.append(addressLi)
//             }
//         }
//     }
// }

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того,
//     що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let contentH = document.getElementById('content')
// let h2List = document.getElementsByTagName('h2')
// let ul = document.createElement('ul')
// contentH.append(ul)
// for (let i = 0; i < h2List.length; i++) {
//     let li = document.createElement('li')
//     li.innerText = `${h2List[i].innerText}`
//     ul.append(li)
// }

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
// ];


// let rulesList = array => {
//     let wrap1 = document.createElement('div')
//     document.body.append(wrap1)
//     wrap1.classList.add('wrap1')
//     let classIndex = 1
//     for (let rule of array) {
//         let ruleBox = document.createElement('div')
//         wrap1.append(ruleBox)
//         ruleBox.classList.add(`rules`)
//         ruleBox.classList.add(`rule${classIndex}`)
//         let h2 = document.createElement('h2')
//         h2.innerText = `${rule.title}`
//         ruleBox.append(h2)
//         let p = document.createElement('p')
//         p.innerText = `${rule.body}`
//         ruleBox.append(p)
//         classIndex++
//     }
// }
// rulesList(rules)

