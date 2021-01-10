// Book Constructor
function Book(title, author, isbn) {
  this.title = title
  this.author = author
  this.isbn = isbn
}

// UI Constructor
function UI() {}

// Add book to list prototype
UI.prototype.addBookToList = function(book) {
  // Create element for our book list
  const list = document.querySelector('#book-list')
  // Create table row element
  const row = document.createElement('tr')
  // Insert columns
  row.innerHTML = 
  `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `
  // Append created tr to our book list
  list.appendChild(row)
}

// Show alert prototype
UI.prototype.showAlert = function (msg, className) {
  // Create div and add classes
  const div = document.createElement('div')
  div.className = `alert ${className}`
  // Add text
  div.appendChild(document.createTextNode(msg))
  // Get parent element
  const container = document.querySelector('.container')
  const form = document.querySelector('#book-form')

  // Insert alert into UI
  container.insertBefore(div, form)

  // Timeout after 3 sec
  setTimeout(function() {
    document.querySelector('.alert').remove()
  }, 3000)
}

// Delete Book
UI.prototype.deleteBook = function(target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove()
  }
}

// Clear input fields prototype
UI.prototype.clearFields = function() {
  document.querySelector('#title').value = ''
  document.querySelector('#author').value = ''
  document.querySelector('#isbn').value = ''
}

// Submit Button Event Listeners
document.querySelector('#book-form').addEventListener('submit', 
  function(e) {
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#isbn').value

    // Instantiate components
    const book = new Book(title, author, isbn)
    const ui = new UI()
    
    // Validate forms are filled before adding
    if (title === '' || author === '' || isbn === '') {
      ui.showAlert('Please fill out all required fields', 'error')
    } else {
      // Instantiate components
      const book = new Book(title, author, isbn)
      const ui = new UI()
    }

    // Add book to list and show message
    ui.addBookToList(book)
    ui.showAlert('Book Added!', 'success')
    
    // Clear input fields
    ui.clearFields()

    e.preventDefault()
})

// Delete Event Listeners
document.querySelector('#book-list').addEventListener('click', function(e) {
  // Instantiate UI
  const ui = new UI()

  // delete the list item and show message
  ui.deleteBook(e.target)
  ui.showAlert('Book removed successfully', 'success')

  e.preventDefault()
})