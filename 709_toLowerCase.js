/*
709. To Lower Case
Easy

Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"
*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let lowercase = {
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
    H: 'h',
    I: 'i',
    J: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    O: 'o',
    P: 'p',
    Q: 'q',
    R: 'r',
    S: 's',
    T: 't',
    U: 'u',
    V: 'v',
    W: 'w',
    X: 'x',
    Y: 'y',
    Z: 'z'
  }
  let stringArr = str.split('')
  return stringArr.map(l => {
    return lowercase.hasOwnProperty(l) ? lowercase[l] : l
  }).join('')
}

/*
Runtime: 52 ms, faster than 66.43% of JavaScript online submissions for To Lower Case.
Memory Usage: 33.9 MB, less than 23.08% of JavaScript online submissions for To Lower Case.
*/