const grossSalary = 5500;

let inssAliquot = [];

if (grossSalary <= 1556.94) {
  inssAliquot = grossSalary * (8 / 100);
} else if (grossSalary <= 2594.92) {
  inssAliquot = grossSalary * (9 / 100);
} else if (grossSalary <= 5189.82) {
  inssAliquot = grossSalary * (11 / 100);
} else if (grossSalary > 5189.82) {
  inssAliquot = 570.88;
}

let salaryAfterInss = grossSalary - inssAliquot;
let incomeTax = [];

if (salaryAfterInss <= 1903.98) {
  incomeTax = 0;
} else if (salaryAfterInss <= 2826.55) {
  incomeTax = salaryAfterInss * (7.5 / 100) - 142.8;
} else if (salaryAfterInss <= 3751.05) {
  incomeTax = salaryAfterInss * (15 / 100) - 354.8;
} else if (salaryAfterInss <= 4664.68) {
  incomeTax =  salaryAfterInss * (22.5 / 100) - 636.13;
} else if (salaryAfterInss > 4664.68) {
  incomeTax = salaryAfterInss * (27.5 / 100) - 869.36;
}

let netSalary = salaryAfterInss - incomeTax;

console.log(`Seu salário nesse mês é de R$${netSalary.toLocaleString("pt-BR")} reais.`);
