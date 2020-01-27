/*
412. Fizz Buzz
Easy

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let resultArray = []
  for (let i = 1; i < n + 1; i ++) {
    let number = i
    if (number % 3 === 0 && number % 5 === 0) {
      resultArray.push('FizzBuzz')
    } else if (number % 3 === 0) {
      resultArray.push('Fizz')
    } else if (number % 5 === 0) {
      resultArray.push('Buzz')
    } else {
      resultArray.push(number.toString())
    }
  } 
  return resultArray
}

/*
Runtime: 60 ms, faster than 84.96% of JavaScript online submissions for Fizz Buzz.
Memory Usage: 37.3 MB, less than 70.00% of JavaScript online submissions for Fizz Buzz.
*/