// Dummy Data
const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/portraits/men/33.jpg'
  },
  {
    name: 'Jane Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'female',
    location: 'Miami FL',
    image: 'https://randomuser.me/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 41,
    gender: 'male',
    lookingfor: 'male',
    location: 'Lynn MA',
    image: 'https://randomuser.me/portraits/men/82.jpg'
  }
]

// Initialize the iterator
const profiles = profileIterator(data)

// Call first profile
nextProfile()

// Next Event
document.getElementById('next').addEventListener('click', nextProfile)

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value

  if(currentProfile !== undefined) {

  
    document.getElementById('profileDisplay').innerHTML = 
    `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.preference}</li>
        <li class="list-group-item">Name: ${currentProfile.name}</li>
      </ul>
    `

    document.getElementById('imageDisplay').innerHTML =
    `
      <img src=${currentProfile.image}>
    `
  } else {
    // No more profiles - reload page
    window.location.reload()
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0

  return {
    next: function() {
      return nextIndex < profiles.length ? 
        { value: profiles[nextIndex++], done: false } :
        {done: true}
    }
  }
}















