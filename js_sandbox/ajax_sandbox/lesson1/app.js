document.querySelector('#button').addEventListener('click', loadData)

function loadData() {
  // Create an XHR Object - instantiate the object
  const xhr = new XMLHttpRequest()

  

  // establish connection and get data
  // OPEN - type of request, file to send data to
  // "Get" the data from data.txt
  xhr.open('GET', 'data.txt', true)

  // before data is loaded
  console.log('READYSTATE after xhr.open', xhr.readyState) // readystate - 1

  // when data is loading
  xhr.onprogress = function() {
    console.log('READYSTATE xhr.onprogress', xhr.readyState) // readystate - 3
  }

  // when ready state changes
  xhr.onreadystatechange = function() {
    console.log('READYSTATE xhr.onreadystatechange', xhr.readyState)
    if(this.status === 200 && this.readyState === 4) {
      // when connection is successful and ready state has changed to 4
      console.log('READYSTATE xhr.onreadystatechange state 4', xhr.readyState)
    }
  }

  // when data is loaded
  xhr.onload = function() {
    // make sure we get 200 response - 200 = all good
    // make sure request is finsihed
    if(this.status === 200 && this.readyState === 4) {
      // console.log(this.responseText) // response text = file contents
      document.querySelector('#output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // when error loading data
  xhr.onerror = function() {
    console.log('Request error...')
  }

  // Send the data
  xhr.send()
}

// HTTP Status
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready