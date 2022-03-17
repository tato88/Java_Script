let userInfo = document.getElementById('userInfo')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(data => {
        console.log(data);
        let userId = localStorage.getItem('userId')
        let infoDiv = document.createElement('div')
        infoDiv.innerHTML = `
            <h2>${data[userId - 1].name}</h2>
            <h3>username:${data[userId - 1].username}</h3>
            <p>email: ${data[userId - 1].email}</p>
            <div class="address">
                <div>city:${data[userId - 1].address.city}</div>
                <div>street:${data[userId - 1].address.street}</div>
                <div>suite:${data[userId - 1].address.suite}</div>
                <div>zipcode:${data[userId - 1].address.zipcode}</div>
                <div class="geo">geo:
                    <div>lat:${data[userId - 1].address.geo.lat}</div>
                    <div>lng:${data[userId - 1].address.geo.lng}</div>
                </div>
            </div>
            <div>phone:${data[userId - 1].phone}</div>
            <div>website:${data[userId - 1].website}</div>
            <div>company:
                <div>bs:${data[userId - 1].company.bs}</div>
                <div>catchPhrase:${data[userId - 1].company.catchPhrase}</div>
                <div>name:${data[userId - 1].company.name}</div>
            </div>

            `
        let butBack = document.createElement('button')
        butBack.innerText='Back to Users'
        butBack.onclick = function (){
            history.back()
        }
        infoDiv.append(butBack)
        userInfo.append(infoDiv)

    })