/*
. Two Sum
Easy

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const possibleSecondValues = {}
  let result = null
  for (let i = 0; i < nums.length; i++) {
    const currNumber = nums[i]
    const possibleSecondVal = target - currNumber
    if (!possibleSecondValues.hasOwnProperty(currNumber)) {
      possibleSecondValues[possibleSecondVal] = i
    } else {
      return [possibleSecondValues[currNumber], i]
    } 
  }
}

/*
Incorrect solution 5 months ago but correct solution 1/20/20
Runtime: 60 ms, faster than 72.45% of JavaScript online submissions for Two Sum.
Memory Usage: 34.5 MB, less than 88.02% of JavaScript online submissions for Two Sum.
*/