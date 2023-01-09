// https://leetcode.com/problems/jewels-and-stones/description/
// Jewels and Stones
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  const jewelSet = new Set(jewels);
  for (let char of stones) {
    if (jewelSet.has(char)) {
      count++;
    }
  }
  return count;
};
