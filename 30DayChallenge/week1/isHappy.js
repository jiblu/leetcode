/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
  var singleDigits = {}
  var checkIfHappy = function (n) {
    if (n === 1) {
      return true
    }
    if (singleDigits.hasOwnProperty(n)) {
      return false
    }
    if (n < 10) {
      singleDigits[n] = n
    }
    const nArr = n.toString().split('')
    const total = nArr.reduce((sum, strN) => {
      return sum + (Number(strN) * Number(strN))
    }, 0)
    return checkIfHappy(total)
  }
  return checkIfHappy(n)
}
