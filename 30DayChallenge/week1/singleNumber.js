/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

Input: [4,2,4,4,4,2]
Output: 4

let singleNum = null
{
  2:2
}

{
  4:4,
}
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  const numbers = {}
  const deleted = {}
  // iterate the array of nums
  // if element is a key of numbers
  // delete the key
  // set elemen as key of deleted
  // else
  // if element is a key of deleted
  // return element
  // else set element as key of numbers
  // return single key in numbers object

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i]
    if (numbers.hasOwnProperty(number)) {
      delete numbers[number]
      deleted[number] = number
    } else {
      if (deleted.hasOwnProperty(number)) {
        return number
      } else {
        numbers[number] = number
      }
    }
  }
  return Object.keys(numbers)[0]
}

/*
16 / 16 test cases passed.
Status: Accepted
Runtime: 68 ms
Memory Usage: 37.5 MB
Submitted: 0 minutes ago

*/
