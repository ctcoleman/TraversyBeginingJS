const http = new easyHTTP

// Get posts
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
  posts = JSON.parse(posts)
  if(err) {
    console.log(err)
  } else {
    document.body.innerHTML = `
      <h1>${posts.title}</h1>
      <p>${posts.body}</p>
    `
  }
})

// // Get single post
// http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(posts)
//   }
// })

// // Create Data
// const data = {
//   title: 'I hate myself',
//   body: 'I deserve to die. I fucking suck. My life is a series of mistakes',
//   author: 'Christopher Coleman'
// }

// // Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(post)
//   }
// })

// // Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(post)
//   }
// })

// // Delete post
// http.del('https://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
//   console.log('poop')
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(posts)
//   }
// })