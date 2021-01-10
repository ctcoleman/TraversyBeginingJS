class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName,
    this.birthday = new Date(dob)
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  getsMarried(newName) {
    this.lastName = newName
  }


}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName)

    this.phone = phone
    this.membership = membership
  }

  static getMembershipCost() {
    return '$500'
  }
}

const mary = new Customer('Mary', 'Jane', '555-867-5309', 'Standard')

console.log(mary.greeting())

console.log(Customer.getMembershipCost())