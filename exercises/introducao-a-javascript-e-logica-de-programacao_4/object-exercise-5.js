let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = "Sim";

let info_2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let value in info) {
  if (value !== "recorrente") {
    console.log(info[value] + " e " + info_2[value]);
  } else {
    console.log("Ambos recorrentes");
  }
}
