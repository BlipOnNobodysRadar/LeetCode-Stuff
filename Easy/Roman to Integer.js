// https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
  let sum = 0;
  const numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const subtractions = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };
  for (let i = 0; i < s.length; i++) {
    let two = s[i] + s[i + 1];
    if (subtractions[two]) {
      sum += subtractions[two];
      i++;
      continue;
    }
    sum += numerals[s[i]];
  }
};
