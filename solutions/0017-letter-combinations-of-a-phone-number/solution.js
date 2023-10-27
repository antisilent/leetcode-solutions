/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

export default function letterCombinations(digits, result = [], idx = 0, str = '') {
  if (!digits) return [];

  if (idx === digits.length) {
    result.push(str);
    return;
  } else {
    let letters = map[digits[idx]];
    for (let i = 0; i < letters.length; i++) {
      letterCombinations(digits, result, idx + 1, str + letters[i]);
    }
  }

  return result;
};
