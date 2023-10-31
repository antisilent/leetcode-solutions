/**
 * @param {number[]} pref
 * @return {number[]}
 */
export default function findArray(pref) {
  const ans = [];

  ans[0] = pref[0];
  for (let i = 1; i < pref.length; i++) {
    ans[i] = pref[i] ^ pref[i - 1];
  }

  return ans;
};
