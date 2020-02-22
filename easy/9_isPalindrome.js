/*
9. Palindrome Number
Easy

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
*/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let originalVal = x
  const isNegative = x < 0
  const digits = []
  let reverseDigits = 0
  let biggestPlace = 0
  if (isNegative) { return false }
  if (originalVal === 0) { return true }
  while (originalVal > 9) {
    const remainder = originalVal % 10
    originalVal = (originalVal - remainder) / 10
    digits.push(remainder)
  }
  digits.push(originalVal)
  biggestPlace = digits.length
  console.log(digits)
  digits.forEach(digit => {
    reverseDigits += digit * Math.pow(10, biggestPlace - 1)
    biggestPlace--
  })
  return reverseDigits === x
}
/*
Runtime: 196 ms, faster than 63.35% of JavaScript online submissions for Palindrome Number.
Memory Usage: 44.7 MB, less than 98.28% of JavaScript online submissions for Palindrome Number.
*/
