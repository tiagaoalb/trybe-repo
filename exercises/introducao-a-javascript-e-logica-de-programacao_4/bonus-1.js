const romanNumber = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
])

function romanToInt (string) {
  let result = 0,
    current, previous = 0;
  for (let i of string.split("").reverse()) {
    current = romanNumber.get(i);
    if (current >= previous) {
      result += current;
    } else {
      result -= current;
    }
    previous = current;
  }
  return result;
}
console.log(romanToInt("XIII"));

/* const romanToInt = s => {

  const romanNumber = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = [];

  for (i = 0; i < s.length; i += 1) {
    if (romanNumber[s[i]] < romanNumber[s[i + 1]]) {
      result.push(romanNumber(s[i + 1]) - romanNumber[s[i]]);
      i += 1;
      continue;
    } else {
      result.push(romanNumber[s[i]]);
    }
  }
  return result.reduce((total, current) => total + current);
}
console.log(romanToInt("XIII")); */