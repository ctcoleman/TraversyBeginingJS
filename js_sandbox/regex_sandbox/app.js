// Regular Expressions
// - Describes a pattern of characters
// - Validation

// let regex
// regex = /hello/

// ----------------------------------------------------------------------------
// regex = /hello/i // case insensitive
// regex = /hello/g // global search

// console.log(regex) // /hello/
// console.log(regex.source) // hello

// exec() - Returns result in array or null if no match
// const result = regex.exec('hello world')
// console.log(result) // ["hello", index: 0, input: "hello world"]
// console.log(result.index) // 0
// console.log(result.input) // hello world
// console.log(result[0]) // hello

// test() - Returns true or false
// const result = regex.test('Hello')
// console.log(result) // false ---> case sensitive - add /i to regex for true

// match() - Returns result array or null
// const str = 'hello there'
// const result = str.match(regex)
// console.log(result) // ["hello", index: 0, input: "hello there"]

// search() - Returns index of the first match or -1 if not found
// const str = "Chris hello there"
// const result = str.search(regex)
// console.log(result) // 6

// replace() - Returns a new string with some/all matches of a pattern
// const str = 'hello there chris'
// const newStr = str.replace(regex, 'Hi')
// console.log(newStr) // Hi there chris

// -----------------------------------------------------------------------------
let regex

// Literal Characters
regex = /hello/
regex = /hello/i // i = case insensitive

// Metacharacter Symbols
regex = /^h/i // ^ = Must start with 
regex = /s$/i // $ = Must end with 
regex = /^hello$/i // ^ + $ = Must start and end with
regex = /h.llo/i // . = Matches any ONE character
regex = /h*llo/ // Matches any character 0 or more times - Grey/Gray
regex = /gre?a?y/i // ? = Optional character
regex = /gre?a?y\?/i // \ = escape 

// Brackets - [] - Character Sets
regex = /gr[ae]y/i // Must be whatever is in the brackets - a or e
regex = /[GF]ray/
regex = /[^X]ray/i // Must be anything EXCEPT what is in the brackets
regex = /^[GF]ray/i // Must be whateve is in the brackets
regex = /[A-Z]ray/ // Match any uppercase letter
regex = /[a-z]ray/ // Match any lowercase letter
regex = /[A-Za-z]ray/ // Match any case letter
regex = /[0-9]dy/ // Match any number

// Qurly Braces - {} - Quantifiers
regex = /Hel{2}o/i // Char before Braces must occur number of times in braces(2)
regex = /Hel{2,4}o/i // Must occur between numbers in braces (2 - 4)
regex = /Hel{2,}o/i // Must occur at least number in braces (2+)

// Parenthesis - () - Grouping
regex = /^([0-9]x){3}/ // numberx - 3x - only

// Shorthand Character Classes
regex = /\w/ // Word Character - alphanumberic or _
regex = /\w+/ // + = one or more
regex = /\W/ // Non-word character
regex = /\d/ // Any digit
regex = /\d+/ // Any digit 0 or more times
regex = /\D/ // Any non-digit
regex = /\s/ // Any white space character
regex = /\S/ // Non-whitespace character
regex = /Hell\b/i // Word boundary - the whole word must match

// Assertions
regex = /x(?=y)/ // Match x only if followed by y
regex = /x(?!y)/ // Match x only if NOT followed by y

// string to match
const str = 'xyxidfdgfdsa'
// log results
const result = regex.exec(str)
console.log(result)

function regexTest(regex, str) {
  if(regex.test(str)) {
    console.log(`${str} matches ${regex.source}`)
  } else {
    console.log(`${str} does NOT match ${regex.source}`)
  }
}

regexTest(regex, str)



















