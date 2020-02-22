/*
1290. Convert Binary Number in a Linked List to Integer
Easy

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

Example 1:

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:

Input: head = [0]
Output: 0
Example 3:

Input: head = [1]
Output: 1
Example 4:

Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880
Example 5:

Input: head = [0,0]
Output: 0

Constraints:

The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  const nodeValues = []
  let output = 0
  const getNodeValues = node => {
    nodeValues.push(node.val)
    if (node.next) {
      getNodeValues(node.next)
    }
  }
  getNodeValues(head)
  for (let i = 0; i < nodeValues.length; i++) {
    const power = nodeValues.length - i - 1
    const nodeVal = nodeValues[i]
    output += nodeVal * Math.pow(2, power)
  }
  return output
}

/*

have some array that holds the values of each node
102 / 102 test cases passed.
Status: Accepted
Runtime: 48 ms
Memory Usage: 33.8 MB
*/
