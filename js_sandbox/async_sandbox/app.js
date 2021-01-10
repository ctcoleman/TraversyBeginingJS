// const myFunc = async () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000)
//   })

//   const error = true
  
//   if(!error) {
//     const res = await promise
//     return res
//   } else {
//     await Promise.reject(new Error('Something went wrong'))
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err))


const getUsers = async () => {
  // wait for the resonse from the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  // Only proceed once the promise is resolved
  const data = await response.json()
  // only proceed once the second promise is resolved
  return data
} 

getUsers().then(users => console.log(users))