let userId = localStorage.getItem('userId')
let postId = localStorage.getItem('postId')
let postsBox = document.getElementById('posts')
let commentsBox = document.getElementById('comments')
fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
    .then(value => value.json())
    .then(data => {
        for (let post of data) {
            if (postId == post.id) {
                console.log(post)
                let postBox = document.createElement('div')
                postBox.classList.add('post')
                postBox.innerHTML = `
                <h3>${post.title}</h3>
                <p>userId:${post.userId},postId:${post.id}</p>
                <div>${post.body}</div>
                `
                postsBox.append(postBox)
            }
        }

    })
fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
    .then(value => value.json())
    .then(data => {
        console.log(data)
        for (let comment of data) {
            let commentBox = document.createElement('div')
            commentBox.innerHTML = `
            <h3>${comment.name}</h3>
            <p>commentId: ${comment.id}</p>
            <p>email: ${comment.id}</p>
            <div>${comment.body}</div>
        `
            commentsBox.append(commentBox)
        }
    })
