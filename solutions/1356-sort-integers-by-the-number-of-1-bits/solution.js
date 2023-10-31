/**
 * @param {number[]} arr
 * @return {number[]}
 */
export default function sortByBits(arr = []) {
  return arr.sort((a, b) => countBits(a) - countBits(b) || a - b);
};

function countBits(n) {
  return n ? (n % 2) + countBits(n >> 1) : 0;
}
