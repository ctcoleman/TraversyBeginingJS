// Init classes
const github = new GitHub
const ui = new UI
// Search input
const searchUser = document.getElementById('searchUser')

// Search input event listener
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value

  if(userText !== '') {
    // Make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message !== 'Not Found') {
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
        } else {
          ui.clearProfile()
          ui.showAlert('User not found', 'alert alert-danger')
        }
      })
  } else {
    // Clear Profile if search string is empty
    ui.clearProfile()
  }
})