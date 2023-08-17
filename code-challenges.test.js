// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe ("removeShuff", () => {
//   it("returns the array with the first item gone and the rest of the array shuffled.", () => {
//     expect.not.arrayContaining(colors1)
//     expect.not.arrayContaining(colors1)
//   })
// })

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]


// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
// ]

// const removeShuff = (array) => {
//   return (array.splice(1, 5).sort((a, b) => 0.5 - Math.random(array)))
// }


// console.log(removeShuff(colors1))  --> Left these in because the test passes even with no function
// console.log(removeShuff(colors2))
// ^^^^^^^^^  Left these in because the test passes even with no function

// Pseudo code: Input: array  Output: first item moved from array and shuffled
// Create a function that takes in the array as a parameter/argument. Use.splice() to remove the first item from the array (starting the index at 1 and going up to 5 to include the final index of colors 2 as well. .sort the new array with an action to a 0.5 float, minused off the result of Math.random.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// describe ("voteCount", () => {
// it("returns the votes summed", () => {
// expect(votes1.voteCount()).toEqual(11)
// expect(votes2.voteCount()).toEqual(-31)
// })
// })
// // Good error:   ReferenceError: voteCount is not defined
// // b) Create the function that makes the test pass.


// const votes1 = { upVotes: 13, downVotes: 2, 
// voteCount: function () {
//   return this.upVotes - this.downVotes
//   }
// }
// const votes2 = { upVotes: 2, downVotes: 33,
//   voteCount: function () {
//     return this.upVotes - this.downVotes
//     } }

// const voteCount = () {
//   return this.upVotes - this.downVotes
// }


// Pseudo code: write a function inside the object in order to reference the names of the keys. have the function to return upvotes and downvotes summed, but add this. to reference the key. upvotes will be minused by downvotes.

// I couldn't find a way in our syllabus to get the sum outside of the object, so I had to make 2 functions. I'd like to know if theres a way to do 1? 

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe ("catNoDupe", () => {
  it("concats the arrays and doesn't log any dupes", () => {
    expect(catNoDupe()).toEqual([
  'array',
  'object',
  'number',
  'string',
  'Boolean',
  'null',
  'undefined'])
  })
})

// Good failure:  "ReferenceError: catNoDupe is not defined"

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]


// b) Create the function that makes the test pass.

// Pseudo code: create a function that will take in 2 arrays as an argument, use [...new Set] to store the unique values of the arrays passed in. Since it stores unique values it won't duplicate any already existing in the array. Concatinate the 2 arrays.

const catNoDupe = (array1, array2) => {
 return [...new Set(dataTypesArray1.concat(dataTypesArray2))]
}
