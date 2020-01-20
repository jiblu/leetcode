/*
20. Valid Parentheses
Easy

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

/**
 * @param {string}
 * @return {boolean}
 */
var isValid = function (s) {
  const closedParens = []
  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (pairs.hasOwnProperty(char)) {
      closedParens.push(pairs[char])
    } else {
      const lastChar = closedParens[closedParens.length - 1]
      if (closedParens.length === 0 || char !== lastChar) {
        return false
      } else {
        closedParens.pop()
      }
    }
  }
  if (closedParens.length > 0) {
    return false
  }
  return true
}
/* 4 tries :(
Runtime: 60 ms, faster than 45.36% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 34.1 MB, less than 50.00% of JavaScript online submissions for Valid Parentheses.
*/
