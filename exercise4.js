function run() {
  console.log("Percentual de Faturamento por Estado");
  console.log("------------------------------------");
  
  const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };
  
  const valorTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
  console.log(`Valor total de faturamento: R$ ${valorTotal.toFixed(2)}`);
  
  console.log("\nPercentual por estado:");
  
  const percentuais = {};
  let somaPercentuais = 0;
  
  for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
    const percentual = (valor / valorTotal) * 100;
    percentuais[estado] = percentual.toFixed(2);
    somaPercentuais += parseFloat(percentual.toFixed(2));
    
    const barSize = Math.round(percentual / 2);
    const bar = '█'.repeat(barSize);
    console.log(`${estado}: R$ ${valor.toFixed(2)} (${percentual.toFixed(2)}%) ${bar}`);
  }
  
  console.log(`\nVerificação: soma dos percentuais = ${somaPercentuais.toFixed(2)}%`);
  
  return percentuais;
}

if (require.main === module) {
  const resultado = run();
  console.log("\nResultado final:", resultado);
}

module.exports = { run };
