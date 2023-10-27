/**
 * @param {number[]} nums
 * @return {number[]}
 */
export default function(nums) {
  let sum = 0;
  return nums.map(val => {
      sum += val;
      return sum;
  })
};
