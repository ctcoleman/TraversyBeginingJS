class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

class UI {
  addBookToList(book) {
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

  showAlert(msg, className) {
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

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove()
    }
  }

  clearFields() {
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
  }
}

// Local Storage Class
class Store {
  static getBooks() {
    let books
    if(localStorage.getItem('books') === null) {
      books = []
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }

    return books
  }

  static displayBooks() {
    const books = Store.getBooks()

    books.forEach(function(book) {
      const ui = new UI

      // Add book to UI
      ui.addBookToList(book)
    })
  }

  static addBook(book) {
    const books = Store.getBooks()

    books.push(book)

    localStorage.setItem('books', JSON.stringify(books))
  }

  static removeBook(isbn) {
    const books = Store.getBooks()

    books.forEach(function(book, i) {
      if(book.isbn === isbn) {
        books.splice(i, 1)
      }
    })

    localStorage.setItem('books', JSON.stringify(books))
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks)

// Submit Book Event Listeners
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

    // Add book to list and show message
    ui.addBookToList(book)
    ui.showAlert('Book Added!', 'success')

    // Add book to local storage
    Store.addBook(book)
    
    // Clear input fields
    ui.clearFields()
  }
    e.preventDefault()
})

// Delete Book Event Listeners
document.querySelector('#book-list').addEventListener('click', function(e) {
  // Instantiate UI
  const ui = new UI()

  // delete the list item
  ui.deleteBook(e.target)

  // Remove from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
  
  // Display success message
  ui.showAlert('Book removed successfully', 'success')

  e.preventDefault()
})