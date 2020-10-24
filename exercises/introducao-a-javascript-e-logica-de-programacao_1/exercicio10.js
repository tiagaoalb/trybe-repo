const valorCusto = 20;
const valorVenda = 40;

const custoTotal = valorCusto + (valorCusto * (20 / 100));

const lucro = (valorVenda - custoTotal) * 1000;

if (valorCusto < 0 || valorVenda < 0) {
  console.error("Valor inválido!")
} else {
  console.log(`O lucro da empresa será de R$${lucro} reais.`)
}
