fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(data => {
        console.log(data);
        let usersBox = document.createElement('div')
        document.body.append(usersBox)
        usersBox.classList.add('userBox')
        for (let user of data) {
            let userBox = document.createElement('div')
            userBox.innerText = user.id
            usersBox.append(userBox)
            let but = document.createElement('button')
            but.innerText = 'User Info'
            but.onclick = function () {
                window.location.href = 'user-details.html'
                localStorage.setItem('userId', user.id)
            }
            userBox.append(but)
        }
    })