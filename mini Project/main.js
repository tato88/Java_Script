fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(data => {
        console.log(data);
        let usersBox = document.createElement('div')
        document.body.append(usersBox)
        usersBox.classList.add('usersBox')
        for (let user of data) {
            let userBox = document.createElement('div')
            userBox.classList.add('userBox')
            userBox.innerHTML = `
            <div>${user.id}. ${user.name}</div>
            `
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