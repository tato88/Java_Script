let products = [
    {id: 1, title: 'Ford', price: '30000', img: 'img/must.jpg'},
    {id: 2, title: 'Porsche', price: '40000', img: 'img/porsche.png'},
    {id: 3, title: 'BMW', price: '35000', img: 'img/x5.png'}
]

let cartDiv = document.getElementsByClassName('cartDiv')[0]
let cartBox = JSON.parse(localStorage.getItem('cart')) || []
//total price create
let totalPrice = document.createElement('div')
let total = 0
for (let item of cartBox) {
    for (let product of products) {
        if (product.id === item) {
            let cartItem = document.createElement('div')
            cartItem.classList.add('cartItems')
            cartItem.innerHTML = `
            <div> ${product.title} - ${product.price}$</div>
            `
            //delete from cart button
            let butDeleteFromCart = document.createElement('button')
            butDeleteFromCart.innerHTML = `remove from cart`
            butDeleteFromCart.onclick = function (e) {
                e.preventDefault();
                cartItem.parentNode.removeChild(cartItem)
                if (cartBox.includes(product.id)) {
                    cartBox.splice((cartBox.indexOf(product.id)), 1)
                }
                localStorage.setItem('cart', JSON.stringify(cartBox))
                total -= JSON.parse(product.price)
                totalPrice.innerText = `Total price: ${total}$`
            }
            cartItem.append(butDeleteFromCart)
            total += JSON.parse(product.price)
            cartDiv.append(cartItem)
        }
    }
}
totalPrice.innerText = `Total price: ${total}$`
document.body.append(totalPrice)
// clear cart
let butClearCart = document.createElement('button')
butClearCart.innerText = 'Clear CART'
butClearCart.onclick = function () {
    while (cartDiv.firstChild) {
        cartDiv.removeChild(cartDiv.firstChild);
    }
    total = 0
    totalPrice.innerText = `Total price: ${total}$`
    cartBox = []
    localStorage.setItem('cart', JSON.stringify(cartBox))
}
document.body.append(butClearCart)
