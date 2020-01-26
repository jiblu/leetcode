/*
1134. Armstrong Number
Easy

The k-digit number N is an Armstrong number if and only if the k-th power of each digit sums to N.

Given a positive integer N, return true if and only if it is an Armstrong number.

Example 1:

Input: 153
Output: true
Explanation: 
153 is a 3-digit number, and 153 = 1^3 + 5^3 + 3^3.
Example 2:

Input: 123
Output: false
Explanation: 
123 is a 3-digit number, and 123 != 1^3 + 2^3 + 3^3 = 36.
*/
/**
 * @param {number} N
 * @return {boolean}
 */
var isArmstrong = function(N) {
  let digits = 0
  let digitsArr = []
  let NCopy = N
  while (NCopy > 9) {
    let remainder = NCopy % 10
    digitsArr.push(remainder)
    NCopy = Math.floor(NCopy / 10)
  }
  digitsArr.push(NCopy)
  digits = digitsArr.length
  let final = digitsArr.reduce((sum, next) => {
    return sum + Math.pow(next, digits)
  }, 0)
  return N === final
}

/*
Runtime: 52 ms, faster than 77.92% of JavaScript online submissions for Armstrong Number.
Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Armstrong Number.
*/