/*
994. Rotting Oranges
Easy

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

Example 1:

Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.
*/

var orangesRotting = function (grid) {
  const minutes = 0
  const freshOranges = grid.length * grid[0].length
  const checkOranges = function (grid) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        const val = grid[i][j]
        if (val === 2) {
          // check left
          if (i > 0 && grid[i - 1][j] !== 2) {
            grid[i - 1][j] = 2
          }
          // check above
          if (j > 0 && grid[i][j - 1] !== 2) {
            grid[i][j - 1] = 2
          }
          // check right
          if (j + 1 < grid[i].length && grid[i][j + 1] !== 2) {
            grid[i][j + 1] = 2
          }
          // check bottom
          if (i + 1 < grid.length && grid[i + 1][j] !== 2) {
            grid[i + 1][j] = 2
          }
        }
      }
    }
  }
  return freshOranges
}
