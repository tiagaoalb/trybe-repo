let array25 = [];
let division = [];

for (let i = 1; i < 26; i++) {
  array25.push(i);
}

for (let div in array25) {
  division.push(array25[div] / 2);
}

console.log(division);
