// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//               street: 'Kulas Light',
//               suite: 'Apt. 556',
//               city: 'Gwenborough',
//               zipcode: '92998-3874',
//               geo: {
//                     lat: '-37.3159',
//                     lng: '81.1496'
//                    }
//              },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//               name: 'Romaguera-Crona',
//               catchPhrase: 'Multi-layered client-server neural-net',
//               bs: 'harness real-time e-markets'
//              }
// }

// class Card {
//
//     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, nameCompany, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {};
//         this.address.street = street;
//         this.address.suite = suite;
//         this.address.city = city;
//         this.address.zipcode = zipcode;
//         this.address.geo = {};
//         this.address.geo.lat = lat;
//         this.address.geo.lng = lng;
//         this.phone = phone;
//         this.website = website;
//         this.company = {}
//         this.company.name = nameCompany
//         this.company.catchPhrase = catchPhrase
//         this.company.bs = bs
//     }
// }
//
// console.log(new Card(1,
//     'Leanne Graham', 'Bret', 'Sincere@april.biz',
//     'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
//     '-37.3159', '81.1496',
//     "+380685013386", 'hildegard.org',
//     'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'))


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }


// class tagObj {
//     constructor(titleOfTag, action) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = []
//     }
// }
//
// let tagAttrs = (tag, titleOfAttr, actionOfAttr) => {
//     tag.attrs.push({titleOfAttr,actionOfAttr})
// }
//
// let tag1 = new tagObj('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.')
// tagAttrs(tag1,'accesskey','Активация ссылки с помощью комбинации клавиш.')
// tagAttrs(tag1,'coords','Устанавливает координаты активной области.')
//
// console.log(tag1)
//
// let tag2 = new tagObj('div','Тег <div> предназначен для выделения фрагмента документа с целью изменения вида содержимого.')
// tagAttrs(tag2,'align','Задает выравнивание содержимого тега <div>.')
// tagAttrs(tag2,'title','Добавляет всплывающую подсказку к содержимому.')
//
// console.log(tag2)

// щось не дуже зрозумів нащо стільки тегів копіпастити )))

// ще такий варіант , якщо фунцію з додаванням у масив запхати в загальний клас тега, але є нюанс :

class tagObj {
    constructor(titleOfTag, action) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = []
    }

    tagAttrs = function (titleOfAttr, actionOfAttr) {
        this.attrs.push({titleOfAttr, actionOfAttr})
    }
}

let tag1 = new tagObj('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.')
tag1.tagAttrs('accesskey', 'Активация ссылки с помощью комбинации клавиш.')
tag1.tagAttrs('coords', 'Устанавливает координаты активной области.')

console.log(tag1) // нюанс : як зробити щоб тут не виводило в консоль функцію як елемент тега?