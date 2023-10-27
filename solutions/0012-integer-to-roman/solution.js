/**
 * @param {number} num
 * @return {string}
 */
export default function intToRoman(num) {
  const chars = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let rom = '';

  for (let i = 0; i < chars.length; i++) {
    while (num >= vals[i]) {
      rom += chars[i];
      num -= vals[i];
    }
  }

  return rom;
};
