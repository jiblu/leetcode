/*
125. Valid Palindrome
Easy

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // create string without spaces or other punctuation
  const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const array = s.toLowerCase().split('')
  const filteredArray = array.filter((char) => {
    return alphanum.indexOf(char) >= 0
  })
  return filteredArray.join('') === filteredArray.reverse().join('')
}

/*
Runtime: 76 ms, faster than 56.58% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 40 MB, less than 21.74% of JavaScript online submissions for Valid Palindrome.
*/
