import { http } from './http'
import { ui } from './ui'

// Get posts from API on DOM load
document.addEventListener('DOMContentLoaded', getPosts)

// Listen for add post click event
document.querySelector('.post-submit').addEventListener('click', submitPost)

// Listen for delete post click event
document.querySelector('#posts').addEventListener('click', deletePost)

// Listen for edit state click event
document.querySelector('#posts').addEventListener('click', enableEdit)

// Listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit)

// Get Posts
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}

// Submit Post
function submitPost() {
  const title = document.querySelector('#title').value
  const body = document.querySelector('#body').value
  const id = document.querySelector('#id').value
  const data = {
    title, //title: title
    body
  }

  if (title === '' || body === '') {
    ui.showAlert('Please enter both title and body', 'alert alert-danger')
  } else {
    if (id === '') {
      console.log('post')
      http.post('http://localhost:3000/posts', data)
      .then(data => {
        ui.showAlert('Successfully submitted post', 'alert alert-success')
        ui.clearFields()
        getPosts()
      })
      .catch(err => console.log(err))
    } else {
      console.log('put')
      http.put(`http://localhost:3000/posts/${id}`, data)
      .then(data => {
        ui.showAlert('Successfully updated post', 'alert alert-success')
        ui.changeFormState('add')
        getPosts()
      })
      .catch(err => console.log(err))
    }
  }
}

// Delete Post
function deletePost(e) {
  if(e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id
    if(confirm('Are you sure?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert('Post Removed Successfully', 'alert alert-success')
          getPosts()
        })
        .catch(err => console.log(err))
    }
  }

  e.preventDefault();
}

// Enable Edit State
function enableEdit(e) {
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
    const body = e.target.parentElement.previousElementSibling.textContent
    const data = {
      id,
      title,
      body
    }

    // Fill form with current post
    ui.fillForm(data)
  } else {
    
  }

  e.preventDefault()
}

// Cancel Edit State
function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add')
  }

  e.preventDefault()
}