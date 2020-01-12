/*
1313. Decompress Run-Length Encoded List
easy

We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [a, b] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are a elements with value b in the decompressed list.

Return the decompressed list.

Example 1:

Input: nums = [1,2,3,4]
Output: [2,4,4,4]

Constraints:

2 <= nums.length <= 100
nums.length % 2 == 0
1 <= nums[i] <= 100
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let pairsList = []
  let output = []
  for (let i = 0; i < nums.length; i ++) {
    if((i + 1) % 2 !== 0) { //if odd
      var pair = []
      pair[0] = nums[i]
    } else {
      pair[1] = nums[i]
      pairsList.push(pair)
    }
  }
  pairsList.forEach(pair => {
    let a = pair[0]
    let b = pair[1]
    let decompressed = []
    for (let i = 0; i < a; i++) {
      decompressed.push(b)
    }
    output = output.concat(decompressed)
  })
  return output
}

/*
Runtime: 88 ms, faster than 100.00% of JavaScript online submissions for Decompress Run-Length Encoded List.
Memory Usage: 38.7 MB, less than 100.00% of JavaScript online submissions for Decompress Run-Length Encoded List.
*/