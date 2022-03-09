// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let user = {}
document.forms.form1.onsubmit = function (e) {
    e.preventDefault()
    let inp1 = e.target.inp1.value
    let inp2 = e.target.inp2.value
    user.name = inp1
    user.age = inp2
    localStorage.setItem('key', JSON.stringify(user))
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let carsArray = JSON.parse(localStorage.getItem('cars')) || []
//
// document.forms.form2.onsubmit = function (e) {
//     e.preventDefault()
//     let model = e.target.model.value
//     let type = e.target.type.value
//     let volume = e.target.volume.value
//     let car = {model, type, volume}
//     carsArray.push(car)
//     localStorage.setItem('cars', JSON.stringify(carsArray))
// }
