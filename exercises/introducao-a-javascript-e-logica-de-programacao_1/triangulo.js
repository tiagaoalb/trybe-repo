const x = 20;
const y = 30;
const z = 110;

const result = x + y + z;

if (typeof result != "number") {
  console.error("Valor inválido!");
} else if (result === 180) {
  console.log(true);
} else {
  console.log(false);
}
