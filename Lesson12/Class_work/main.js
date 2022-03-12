// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let postBox = document.createElement('div')
postBox.classList.add('postBox')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(data => {
        let postBox = document.getElementsByClassName('posts')[0]
        for (let post of data) {
            let postDiv = document.createElement('div')
            let title = document.createElement('h3')
            title.innerText = post.title
            let p = document.createElement('p')
            p.innerText = `userId: ${post.userId}  id: ${post.id}`
            let body = document.createElement('strong')
            body.innerText = post.body
            postDiv.classList.add('post')
            postBox.append(postDiv)
            postDiv.append(title)
            postDiv.append(p)
            postDiv.append(body)
            let but = document.createElement('button')
            but.innerText = 'comments'
            but.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(value => value.json())
                    .then(data => {
                        let commentBox = document.createElement('div')
                        postDiv.append(commentBox)
                        for (let comment of data) {
                            if (post.userId === comment.postId){
                                let commentDiv = document.createElement('div')
                                let title = document.createElement('h3')
                                title.innerText = comment.email
                                let p = document.createElement('p')
                                p.innerText = `userId: ${comment.userId}  id: ${comment.id}`
                                let body = document.createElement('strong')
                                body.innerText = comment.body
                                commentDiv.classList.add('comments')
                                commentBox.append(commentDiv)
                                commentDiv.append(title)
                                commentDiv.append(p)
                                commentDiv.append(body)
                            }
                        }
                    })

            }
            postDiv.append(but)

        }
    });
document.body.append(postBox)

