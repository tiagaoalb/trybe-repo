let sum = 0;

function nSum(n) {
  for (i = 0; i <= n; i += 1) {
    sum += i;
  }
  return sum;
}

console.log(nSum(5));
