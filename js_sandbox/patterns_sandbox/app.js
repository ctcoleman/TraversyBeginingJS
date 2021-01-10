// JS Patterns
// Re-usable solution that can be applied to ocurring problems in software design --- Programming templates for a variety of programing situations

// // Module Pattern
// // Basic structure
// // Immediately invoked expression with anon function
// // (function() {
// //   // Declare private variables and functions
// //   return {
// //     // Declare public variables and functions
// //   }
// // })()
// // Returns new key:value pairs with methods

// const UICtrl = (function() {
//   // Private/Function Scope
//   let text = 'Hello World'

//   const changeText = function() {
//     const element = document.querySelector('h1')
//     element.textContent = text
//   }

//   return {
//     // Public/Global Scope
//     callChangeText: function() {
//       changeText()
//       console.log(text)
//     }
//   }
// })()

// let changeText = UICtrl

// console.log(changeText)
// changeText.callChangeText()

// // Revealing Module Pattern
// // Same Basic Sctructure as Module Pattern
// // Returns object that makes private methods accessable globally

// const ItemCtrl = (function() {
//   let _data = [] // our "state" --- _denotes private variable

//   function add(id) {
//     _data.push(id)
//     console.log('Item added to data')
//   }

//   function get(id) {
//     return _data.find(item => item.id === id)
//   }

//   // Reveal the methods so they can be used globally
//   return {
//     add: add,
//     get: get
//   }
// })()

// console.log(ItemCtrl)
// ItemCtrl.add({id:1, name: 'Bob'})
// console.log(ItemCtrl.get(1))

// // Sigleton Pattern
// // Immediate anon function
// // Can only return one instance of object at a time
// // Keeps private variables that can't be accessed globally
// const Singleton = (function() {
//   let instance

//   function createInstance() {
//     const object = new Object({ name: 'Brad' })
//     return object
//   }

//   return {
//     getInstance: function() {
//       if(!instance) {
//         instance = createInstance()
//       }
//       return instance
//     }
//   }
// })()

// const instanceA = Singleton.getInstance()
// const instanceB = Singleton.getInstance()

// console.log(instanceA === instanceB)

// Factory Pattern - Many objects
// function MemberFactory() {
//   this.createMember = function(name, type) {
//     let member

//     if (type === 'Simple') {
//       member = new SimpleMembership(name)
//     } else if (type === 'Standard') {
//       member = new StandardMembership(name)
//     } else if (type === 'Super') {
//       member = new SuperMembership(name)
//     } else {}

//     member.type = type

//     member.define = function() {
//       console.log(`${this.name} (${this.type}):${this.cost}`)
//     }

//     return member
//   }
// }

// const SimpleMembership = function(name) {
//   this.name = name
//   this.cost = 5
// }

// const StandardMembership = function(name) {
//   this.name = name
//   this.cost = 5
// }

// const SuperMembership = function(name) {
//   this.name = name
//   this.cost = 5
// }

// const members = []
// const factory = new MemberFactory()

// members.push(factory.createMember('John Doe', 'Simple'))
// members.push(factory.createMember('Jack Frost', 'Super'))
// members.push(factory.createMember('Jill Cornstalk', 'Standard'))
// members.push(factory.createMember('Janette Edwards', 'Simple'))

// console.log(members)

// members.forEach(function(member) {
//   member.define()
// })

// // Observer - subscribe to events
// function EventObserver() {
//   this.observers = []
// }

// EventObserver.prototype = {
//   subscribe: function(fn) {
//     this.observers.push(fn)
//     console.log(`You are now subscribed to ${fn.name}`)
//   },
//   unsubscribe: function(fn) {
//     this.observers = this.observers.filter(function(item) {
//       if (item !== fn) {
//         return item
//       }
//     })
//     console.log(`You are now unsubscribed from ${fn.name}`)
//   },
//   fire: function() {
//     this.observers.forEach(function(item) {
//       item.call()
//     })
//   }
// }

// const click = new EventObserver()

// // Event listeners
// document.querySelector('.sub-ms').addEventListener('click', function() {
//   click.subscribe(getCurrentMilliseconds)
// })
// document.querySelector('.unsub-ms').addEventListener('click', function() {
//   click.unsubscribe(getCurrentMilliseconds)
// })
// document.querySelector('.sub-s').addEventListener('click', function() {
//   click.subscribe(getCurrentSeconds)
// })
// document.querySelector('.unsub-s').addEventListener('click', function() {
//   click.unsubscribe(getCurrentSeconds)
// })
// document.querySelector('.fire').addEventListener('click', function() {
//   click.fire()
// })

// // Click Handler
// const getCurrentMilliseconds = function() {
//   console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
// }
// const getCurrentSeconds = function() {
//   console.log(`Current Seconds: ${new Date().getSeconds()}`)
// }


// Mediator
// const User = function(name) {
//   this.name = name
//   this.chatroom = null
// }

// User.prototype = {
//   send: function(message, to) {
//     this.chatroom.send(message, this, to)
//   },
//   receive: function(message, from) {
//     console.log(`${from.name} to ${this.name}: ${message}`)
//   }
// }

// const Chatroom = function() {
//   let users = {} // list of users

//   return {
//     register: function(user) {
//       users[user.name] = user
//       user.chatroom = this
//     },
//     send: function(message, from, to) {
//       if(to) {
//         // Single user message
//         to.receive(message, from)
//       } else {
//         // Mass message
//         for(key in users) {
//           if(users[key] !== from) {
//             users[key].receive(message, from)
//           }
//         }
//       }
//     }
//   }
// }

// const brad = new User('Brad')
// const jeff = new User('Jeff')
// const sara = new User('Sara')

// const chatroom = new Chatroom()

// chatroom.register(brad)
// chatroom.register(jeff)
// chatroom.register(sara)

// brad.send('Hello Jeff', jeff)
// sara.send('Hello Brad. You are the best dev ever', brad)
// jeff.send('Hello Everyone!!!!')

// State - create and change state
// Check out state sandbox






























