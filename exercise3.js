const fs = require('fs');

function run() {
  console.log("Análise de Faturamento Diário");
  console.log("-----------------------------");
  
  let data;
  try {
    const rawData = fs.readFileSync('./dados.json', 'utf8');
    data = JSON.parse(rawData);
    console.log(`Dados carregados: ${data.length} dias de faturamento.`);
  } catch (error) {
    console.error("Erro ao ler o arquivo dados.json:", error.message);
    return "Erro ao processar dados.";
  }
  
  const diasComFaturamento = data.filter(item => item.valor > 0);
  console.log(`Dias com faturamento: ${diasComFaturamento.length}`);
  
  const menorValor = Math.min(...diasComFaturamento.map(item => item.valor));
  const maiorValor = Math.max(...diasComFaturamento.map(item => item.valor));
  
  const somaFaturamento = diasComFaturamento.reduce((acc, item) => acc + item.valor, 0);
  const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
  
  const diasAcimaMedia = diasComFaturamento.filter(item => item.valor > mediaFaturamento).length;
  
  console.log("\nResultados da análise:");
  console.log(`1. Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
  console.log(`2. Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
  console.log(`3. Média mensal de faturamento: R$ ${mediaFaturamento.toFixed(2)}`);
  console.log(`4. Dias com faturamento acima da média: ${diasAcimaMedia}`);
  
  return {
    menorValor: menorValor.toFixed(2),
    maiorValor: maiorValor.toFixed(2),
    diasAcimaMedia
  };
}

if (require.main === module) {
  const resultado = run();
  console.log("\nResultado final:", resultado);
}

module.exports = { run };