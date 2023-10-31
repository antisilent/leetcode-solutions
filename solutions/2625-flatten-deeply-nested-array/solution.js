/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
export default function flat(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && n > 0) {
      const flattened = flat(arr[i], n - 1);
      arr.splice(i, 1, ...flattened);

      i += flattened.length - 1;
    }
  }

  return arr;
};
