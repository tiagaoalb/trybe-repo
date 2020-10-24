const peça = "bispo";

if (typeof peça !== "string") {
  console.error("Entrada inválida!");
} else if (peça.toLowerCase() === "rainha") {
  console.log(
    "Pode se mover na horizontal, vertical e diagonais uma casa de cada vez."
  );
} else if (peça.toLowerCase() === "rei") {
  console.log(
    "Pode se mover na horizontal, vertical e diagonais, sem pular outras peças."
  );
} else if (peça.toLowerCase() === "bispo") {
  console.log("Pode se mover na diagonal.");
} else if (peça.toLowerCase() === "cavalo") {
  console.log("Pode se mover em L e pular outras peças.");
} else if (peça.toLowerCase() === "torre") {
  console.log(
    "Pode se mover na vertical ou horizontal, mas naão pode pular outras peças."
  );
} else if (peça.toLowerCase() === "peao") {
  console.log(
    "Pode se mover apenas uma casa e somente captura outras peças na diagonal."
  );
} else {
  console.log("Peça inválida!");
}
