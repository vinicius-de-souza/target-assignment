function run() {
  console.log("Cálculo de Soma");
  console.log("---------------");
  
  let INDICE = 13;
  let SOMA = 0;
  let K = 0;
  
  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }
  
  console.log(`Valor final de SOMA = ${SOMA}`);
  
  return SOMA;
}

if (require.main === module) {
  const resultado = run();
  console.log(`\nResultado: ${resultado}`);
}

module.exports = { run };
