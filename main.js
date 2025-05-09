const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const exercise1 = require('./exercise1');
const exercise2 = require('./exercise2');
const exercise3 = require('./exercise3');
const exercise4 = require('./exercise4');
const exercise5 = require('./exercise5');

function clearConsole() {
  console.clear();
}

function displayTitle() {
  console.log('=============================');
  console.log('      EXERCÍCIOS TARGET      ');
  console.log('=============================');
}

function showMenu() {  clearConsole();
  displayTitle();
  console.log('1. Cálculo de Soma');
  console.log('2. Verificador de Sequência de Fibonacci');
  console.log('3. Análise de faturamento');
  console.log('4. Percentual de faturamento por estado');
  console.log('5. Inversão de string');
  console.log('q. Sair');
  console.log('------------------------------\n');
  
  rl.question('Selecione uma opção: ', (answer) => {
    handleMenuSelection(answer);
  });
}

function handleMenuSelection(selection) {  switch (selection.toLowerCase()) {
    case '1':
      runExercise(exercise1, 'Cálculo de Soma');
      break;    case '2':
      clearConsole();
      console.log("\nExecutando: Verificador de Sequência de Fibonacci\n");
      
      rl.question('Digite um número para verificar na sequência de Fibonacci: ', (inputNum) => {
        const num = parseInt(inputNum);
        
        if (isNaN(num)) {
          console.log("\nEntrada inválida. Por favor, insira um número válido.");
          console.log('\nPressione Enter para voltar ao menu...');
          
          rl.once('line', () => {
            showMenu();
          });
          return;
        }
        
        // Modificar o exercise2.js para aceitar um número externo
        const originalRun = exercise2.run;
        exercise2.run = function() {
          console.log("Verificador de Sequência de Fibonacci");
          console.log("-------------------------------------");
          return exercise2.checkFibonacci(num);
        };
        
        // Executar o exercício
        const result = exercise2.run();
        console.log(`\nResultado: ${result}`);
        
        // Restaurar a função original
        exercise2.run = originalRun;
        
        console.log('\nPressione Enter para voltar ao menu...');
        rl.once('line', () => {
          showMenu();
        });
      });
      break;
    case '3':
      runExercise(exercise3, 'Análise de faturamento');
      break;
    case '4':
      runExercise(exercise4, 'Percentual de faturamento por estado');
      break;
    case '5':
      runExercise(exercise5, 'Inversão de string');
      break;    case 'q':      console.log('Saindo do programa. Até logo!');
      rl.close();
      return;
    default:
      console.log('Seleção inválida. Por favor, tente novamente.');
      setTimeout(showMenu, 1000);
      return;
  }
}

function runExercise(exerciseModule, exerciseName) {
  clearConsole();
  console.log(`\nExecutando: ${exerciseName}\n`);
  
  const result = exerciseModule.run();
  
  if (result instanceof Promise) {
    result.then(asyncResult => {
      console.log(`\nResultado: ${asyncResult}`);
      console.log('\nPressione Enter para voltar ao menu...');
      
      rl.once('line', () => {
        showMenu();
      });
    });
  } else {
    console.log(`\nResultado: ${result}`);
    console.log('\nPressione Enter para voltar ao menu...');
    
    rl.once('line', () => {
      showMenu();
    });
  }
}

showMenu();
