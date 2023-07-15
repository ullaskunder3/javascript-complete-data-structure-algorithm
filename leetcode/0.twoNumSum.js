/**
 * Given an array of integers and a target sum, find two numbers in the array that add up to the target sum.

1. initilize empty hash table
2. use for each
 - calculate diff between sum and num
 - if diff in hashtable return as a pair numers
 

 */

function twoNumberSum(arr, target) {
  const numMap = {};
  console.log(numMap);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const diff = target - num;
    console.log("diff",numMap[diff]);

    if (numMap[diff] !== undefined) {
      return [diff, num];
    }
    numMap[num] = true;
    console.log(numMap);
  }

  return [];
}

const arr = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;
const result = twoNumberSum(arr, target);
console.log(result);
// Output: [11, -1]
