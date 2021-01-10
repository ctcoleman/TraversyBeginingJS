// // Iterators
// function namesIterator(names) {
//   let nextIndex = 0

//   return {
//     next: function() {
//       return nextIndex < names.length ?
//         { value: names[nextIndex++], done: false } :
//         { done: true }
//     }
//   }
// }

// // Create an array of name
// const namesArr = ['Jack', 'Jill', 'John']
// // Init iterator and pass in names array
// const names = namesIterator(namesArr)

// console.log(names.next())
// console.log(names.next())
// console.log(names.next())
// console.log(names.next())


// // Generator (function*)
// function* sayNames() {
//   yield 'Jack'
//   yield 'Jill'
//   yield 'John'
// }

// const name = sayNames()

// console.log(name.next())
// console.log(name.next())
// console.log(name.next())
// console.log(name.next())

// // ID Creator - Generator example
// function* createIds() {
//   let index = 0

//   while(true) {
//     yield { id: index++ }
//   }
// }

// const gen = createIds()

// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)


// Symbols
// // Create a symbol
// const sym1 = Symbol()
// const sym2 = Symbol('sym2')

// console.log(Symbol() === Symbol())
// console.log(`Hello ${String(sym1)}`)

// // Unique Object Keys
// const KEY1 = Symbol()
// const KEY2 = Symbol('sym2')

// const myObj = {}

// myObj[KEY1] = 'Prop1'
// myObj[KEY2] = 'Prop2'

// myObj.key3 = 'Prop3'
// myObj.key4 = 'Prop4'

// console.log(myObj[KEY1])
// console.log(myObj[KEY2])

// // Symbols are not enumerable in for...in loops
// for(let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`)
// }

// // Symbols are ignored by JSON.stringify
// console.log(JSON.stringify({key: 'prop'}))  // {"key":"prop"}
// console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}))  // {}


// // Destructuring
// let a, b
// [a, b] = [100, 200]
// [a, b] = [100, 200, 300, 400, 500]

// console.log(b)

// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500})

// console.log(a, b)

// // Object Destructuring
// const person = {
//   name: 'John Doe',
//   age: 32,
//   gender: 'male',
//   city: 'Miami',
//   sayHello: function() {
//     console.log('Hello')
//   }
// }

// // // Old ES5 Way
// // const name = person.name,
// //       age = person.age,
// //       city = person.city,
// //       gender = person.gender

// // New ES6 Destructuring
// const { name, age, city, sayHello } = person
// console.log(name, age, city)

// sayHello()


// // ES6 Maps - Key-value pairs - can use ANY type as a key/value
// const map1 = new Map()

// // Set Keys
// const key1 = 'some string',
//       key2 = {},
//       key3 = function() {}

// // Set values by key
// map1.set(key1, 'Value of key1')
// map1.set(key2, 'Value of key2')
// map1.set(key3, 'Value of key3')

// // // Display values
// // console.log(map1.get(key3))
// // // Count values
// // console.log(map1.size)

// // for...of loops
// // Iterate maps
// for(let [key, value] of map1) {
//   console.log(`${key} = ${value}`)
// }

// // Iterate through keys only
// for(let key of map1.keys()) {
//   console.log(`${key}`)
// }

// // Iterate through values only
// for(let value of map1.values()) {
//   console.log(`${value}`)
// }


// // for...each
// map1.forEach(function(value, key) {
//   console.log(`${key} = ${value}`)
// })

// // Convert to array
// // Create an array of the key value pairs
// const keyValArr = Array.from(map1)
// console.log(keyValArr)

// // Create an array of values only
// const valArr = Array.from(map1.values())
// console.log(valArr)

// // Create an array of keys only
// const keyArr = Array.from(map1.keys())
// console.log(keyArr)



// ES6 Sets - "array-like" / Single values - Use any type
const set1 = new Set()

// Add values to set
set1.add(100)
set1.add('A string')
set1.add({name: 'Bob'})
set1.add(true)
set1.add(100) // Doesn't add again - has to be a unique value

const set2 = new Set([1, true, 'string'])

console.log(set1)
console.log(set2)
// count
console.log(set1.size)
// Check for values
console.log(set1.has(100))
console.log(set1.has(50 + 50))
console.log(false)
console.log(set1.has({ name: 'John' })) // false - reference object not primitive data type

// Delete from set
set1.delete(100)
console.log(set1)

// Iterate through set

// for..of
for(let item of set1) {
  console.log(item)
}

// for..each
set1.forEach(value => {
  console.log(value)
})


// Convert to array
const setArr = Array.from(set1)
console.log(setArr)

































