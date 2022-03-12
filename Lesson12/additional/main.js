// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий
//     блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий
//     блок виводяться всі коментарі поточного поста
let usersBox = document.getElementsByClassName('users')[0]
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(data => {
        console.log(data)
        for (let user of data) {
            let userBox = document.createElement('div')
            userBox.classList.add('user')
            let h2 = document.createElement('h2')
            h2.innerText = `${user.name}  id:${user.id}`
            let h3 = document.createElement('h2')
            h3.innerText = `nick: ${user.username}`
            let pEmail = document.createElement('p')
            pEmail.innerText = `nick: ${user.email}`
            let pAddress = document.createElement('p')
            pAddress.innerText = `street: ${user.address.street},suite: ${user.address.suite},city: ${user.address.city},zipcode: ${user.address.zipcode}, geo: lat:${user.address.geo.lat},lng:${user.address.geo.lng}`
            let but = document.createElement('button')
            but.classList.add('but')
            but.innerHTML = `<strong>Post</strong>`
            userBox.append(h2)
            userBox.append(h3)
            userBox.append(pEmail)
            userBox.append(pAddress)
            userBox.append(but)
            usersBox.append(userBox)
            but.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(value => value.json())
                    .then(data => {
                        console.log(data)
                        let postBox = document.createElement('div')
                        postBox.classList.add('posts')
                        userBox.append(postBox)
                        for (let post of data) {
                            if (post.userId === user.id) {
                                let postDiv = document.createElement('div')
                                postDiv.classList.add('post')
                                console.log(post)
                                //id postTitle body
                                let postTitle = document.createElement('h4')
                                postTitle.innerText = `#${post.id} ${post.title} `
                                let postBody = document.createElement('div')
                                postBody.innerText = `${post.body}`
                                let but = document.createElement('button')
                                but.innerHTML = `<strong>Comments</strong>`

                                postDiv.append(postTitle)
                                postDiv.append(postBody)
                                postDiv.append(but)
                                postBox.append(postDiv)
                                but.onclick = () => {
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(value => value.json())
                                        .then(data => {
                                            console.log(data)
                                            let commentBox = document.createElement('div')
                                            commentBox.classList.add('comments')
                                            for (let comment of data) {
                                                if (comment.postId === post.userId) {
                                                    let commentDiv = document.createElement('div')
                                                    commentDiv.classList.add('comment')
                                                    console.log(comment)
                                                    //id name email body
                                                    let commentTitle = document.createElement('h4')
                                                    commentTitle.innerText = `#${comment.id} ${comment.email} `
                                                    let commentBody = document.createElement('div')
                                                    commentBody.innerText = `${post.body}`
                                                    commentDiv.append(commentTitle)
                                                    commentDiv.append(commentBody)
                                                    commentBox.append(commentDiv)
                                                }
                                            }
                                            postDiv.append(commentBox)

                                        })
                                }
                            }
                        }

                    })
            }
        }
    })