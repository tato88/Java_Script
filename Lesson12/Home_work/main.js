// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(data => {
//         let postBox = document.getElementsByClassName('posts')[0]
//         for (let post of data) {
//             let postDiv = document.createElement('div')
//             let title = document.createElement('h3')
//             title.innerText = post.title
//             let p = document.createElement('p')
//             p.innerText = `userId: ${post.userId}  id: ${post.id}`
//             let body = document.createElement('strong')
//             body.innerText = post.body
//             postDiv.classList.add('post')
//             postBox.append(postDiv)
//             postDiv.append(title)
//             postDiv.append(p)
//             postDiv.append(body)
//         }
//     });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(value => value.json())
.then(data=>{
    let commentsBox = document.getElementsByClassName('comments')[0]
    for (let comment of data) {
        let name = document.createElement('h3')
        let postId = document.createElement('span')
        let body = document.createElement('p')
        name.innerText = comment.name
        postId.innerText = `post id: ${comment.postId} , id: ${comment.id}`
        body.innerText = comment.body
        let box = document.createElement('div')
        box.classList.add('box')
        commentsBox.append(box)
        box.append(name)
        box.append(postId)
        box.append(body)
    }
})