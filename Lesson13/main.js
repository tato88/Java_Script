// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let products = [
    {id: 1, title: 'Ford', price: '30000', img: 'img/must.jpg'},
    {id: 2, title: 'Porsche', price: '40000', img: 'img/porsche.png'},
    {id: 3, title: 'BMW', price: '35000', img: 'img/x5.png'}
]

let productsBox = document.getElementsByClassName('products')[0]
let cartBox = JSON.parse(localStorage.getItem('cart')) || []

//cart button
let butCart = document.createElement('button')
butCart.classList.add('butCart')
butCart.innerHTML = `<strong>CART ${cartBox.length}</strong>`
butCart.onclick = function (e) {
    window.location.href = "list.html"
}

for (let product of products) {
    let productBox = document.createElement('div')
    let title = document.createElement('h3')
    title.innerText = `${product.id}. ${product.title} - ${product.price}$`
    productBox.append(title)
    let img = document.createElement('img')
    img.src = `${product.img}`
    img.style.width = '300px'
    productBox.append(img)

    let butFrom = document.createElement('form')
//buy button
    let butBuy = document.createElement('button')
    butBuy.innerHTML = 'add to cart'
    butBuy.onclick = function (e) {
        e.preventDefault();
        console.log(cartBox)
        cartBox.push(product.id)
        localStorage.setItem('cart', JSON.stringify(cartBox))
        butCart.innerHTML = `<strong>CART ${cartBox.length}</strong>`
    }
    butFrom.append(butBuy)
//delete from cart button
    let butDeleteFromCart = document.createElement('button')
    butDeleteFromCart.innerHTML = `remove from cart`
    butDeleteFromCart.onclick = function (e) {
        e.preventDefault();
        if (cartBox.includes(product.id)) {
            cartBox.splice((cartBox.indexOf(product.id)), 1)
        }
        localStorage.setItem('cart', JSON.stringify(cartBox))
        butCart.innerHTML = `<strong>CART ${cartBox.length}</strong>`
    }
    butFrom.append(butDeleteFromCart)
    productBox.append(butFrom)
    productsBox.append(productBox)
    document.body.append(butCart)
}
