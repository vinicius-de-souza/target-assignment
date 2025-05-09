const readline = require('readline');

function run() {
  const defaultString = "Target Sistemas";
  return inverterString(defaultString);
}

function inverterString(str) {
  console.log("Inversão de String");
  console.log("-----------------");
  
  console.log(`String original: "${str}"`);
  
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  
  console.log(`String invertida: "${invertida}"`);
  
  console.log("\nProcesso de inversão:");
  
  let passos = [];
  let stringParcial = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    stringParcial += str[i];
    passos.push(`Passo ${str.length - i}: Adicionando '${str[i]}' → "${stringParcial}"`);
  }
  
  passos.forEach(passo => console.log(passo));
  
  return invertida;
}

function runInteractive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Inversão de String (Modo Interativo)");
  console.log("-----------------------------------");
  
  rl.question('Digite uma string para inverter: ', (input) => {
    if (!input.trim()) {
      console.log("String vazia. Usando valor padrão 'Target Sistemas'");
      input = "Target Sistemas";
    }
    
    const resultado = inverterString(input);
    console.log(`\nResultado: ${resultado}`);
    rl.close();
  });
}

if (require.main === module) {
  runInteractive();
}

module.exports = { run };
