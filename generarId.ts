function generarId(numGroups: number, charsPerGroup: number): string {
  const chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // todos os caracteres possíveis
  let id: string = ""; // começa com uma string vazia
  for (let i = 0; i < numGroups; i += 1) { // gera 4 grupos de 4 caracteres alfanuméricos cada
    for (let j = 0; j < charsPerGroup; j += 1) {
      id += chars.charAt(Math.floor(Math.random() * chars.length)); // escolhe uma letra aleatória da pool de caracteres
    }
    if (i < numGroups - 1) { // adiciona hifens entre os grupos, mas não após o último
      id += "-";
    }
  }
  return id;
}

const id: string = generarId(4, 4);
console.log(id); // imprime algo como "HH1M-IJTE-6PFH-S43W"
