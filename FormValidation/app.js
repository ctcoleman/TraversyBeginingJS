// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName)
document.getElementById('zipcode').addEventListener('blur', validateZip)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('phone').addEventListener('blur', validatePhone)

function validateName() {
    const name = document.getElementById('name')
    const regex = /^[a-zA-Z]{2,15}$/ // Any characters a-z, anycase, between 2 to 15 characters

    if(!regex.test(name.value)) {
      name.classList.add('is-invalid')
      name.nextElementSibling.classList.add('is-invalid-text')
    } else {
      name.classList.remove('is-invalid')
      name.nextElementSibling.classList.remove('is-invalid-text')
    }
}

function validateZip() {
  const zipcode = document.getElementById('zipcode')
  const regex = /^[0-9]{5}/

  if(!regex.test(zipcode.value)) {
    zipcode.classList.add('is-invalid')
    zipcode.nextElementSibling.classList.add('is-invalid-text')
  } else {
    zipcode.classList.remove('is-invalid')
    zipcode.nextElementSibling.classList.remove('is-invalid-text')
  }
}

function validateEmail() {
  const email = document.getElementById('email')
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

  if(!regex.test(email.value)) {
    email.classList.add('is-invalid')
    email.nextElementSibling.classList.add('is-invalid-text')
  } else {
    email.classList.remove('is-invalid')
    email.nextElementSibling.classList.remove('is-invalid-text')
  }
}

function validatePhone() {
  const phone = document.getElementById('phone')
  const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/

  if(!regex.test(phone.value)) {
    phone.classList.add('is-invalid')
    phone.nextElementSibling.classList.add('is-invalid-text')
  } else {
    phone.classList.remove('is-invalid')
    phone.nextElementSibling.classList.remove('is-invalid-text')
  }
}

