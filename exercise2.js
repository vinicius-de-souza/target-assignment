function run() {
  console.log("Verificador de Sequência de Fibonacci");
  console.log("-------------------------------------");
  
  // Se for executado diretamente
  if (require.main === module) {
    const num = parseInt(process.argv[2] || 21);
    return checkFibonacci(num);
  }
  
  const num = 34; 
  return checkFibonacci(num);
}

function checkFibonacci(num) {
  console.log(`\nVerificando se ${num} está na sequência de Fibonacci.`);
  
  const fib = [0, 1];
  while (fib[fib.length-1] < num) {
    fib.push(fib[fib.length-1] + fib[fib.length-2]);
  }
  
  console.log("\nSequência de Fibonacci:");
  console.log(fib.join(", "));
  
  const belongs = fib.includes(num);
  
  const result = belongs 
    ? `${num} faz parte da sequência de Fibonacci.`
    : `${num} não faz parte da sequência de Fibonacci.`;
  
  console.log(`\n${result}`);
  
  return result;
}

function checkFibonacci(num) {
  console.log(`\nVerificando se ${num} está na sequência de Fibonacci.`);
  
  const fib = [0, 1];
  while (fib[fib.length-1] < num) {
    fib.push(fib[fib.length-1] + fib[fib.length-2]);
  }
  
  console.log("\nSequência de Fibonacci:");
  console.log(fib.join(", "));
  
  const belongs = fib.includes(num);
  
  const result = belongs 
    ? `${num} faz parte da sequência de Fibonacci.`
    : `${num} não faz parte da sequência de Fibonacci.`;
  
  console.log(`\n${result}`);
  
  return result;
}

if (require.main === module) {
  const result = run();
  
  if (result instanceof Promise) {
    result.then(resultado => {
      console.log(`\nResultado: ${resultado}`);
    });
  } else {
    console.log(`\nResultado: ${result}`);
  }
}

module.exports = { run, checkFibonacci };
