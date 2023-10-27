/**
 * @param {number} turnedOn
 * @return {string[]}
 */
export default function readBinaryWatch(turnedOn) {
  // if (turnedOn === 0) return ['0:00'];
  // if (turnedOn > 8) return [];
  const countBits = (dec) => dec.toString(2).split('').reduce((a, b) => a + parseInt(b), 0);
  const results = [];

  for (let h = 0; h < 12; h++) {

    const hbits = countBits(h);
    for (let m = 0; m < 60; m++) {
      const mbits = countBits(m);
      if (hbits + mbits === turnedOn) {
        results.push(`${h}:${m.toString().padStart(2, '0')}`);
      }
    }
  }

  return results;
};

// TODO: Why is this a better solution?
// /**
//  * @param {number} turnedOn
//  * @return {string[]}
//  */
// export default function readBinaryWatch(turnedOn) {
//   let res = [];
//   let count = (n) => n ? (n % 2) + count(n >> 1) : 0;
//   for (let h = 0; h < 12; h++) {
//     for (let m = 0; m < 60; m++) {
//       if (count(h) + count(m) == turnedOn) {
//         res.push(`${h}:${m  < 10 ? '0' + m : m}`);
//       }
//     }
//   }
//   return res;
// };
