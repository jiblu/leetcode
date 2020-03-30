var twoSum = (nums, target) => {
  let values = {}
  //iterate the nums array
    //if num < target
      //diff = target - num
      //if values has key of diff
        //return [current index, values[diff]]
      // else
        //values[num] = current index
  
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i]
    let diff = 0
    if (val < target) {
      diff = target - val
      if (values.hasOwnProperty(diff)) {
        return [i, values[diff]]
      } else {
        values[val] = i
      }
    }
  
  return null
}