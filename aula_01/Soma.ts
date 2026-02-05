import leia = require("readline-sync");//import leia from "readline-sync";

let numero1: number, numero2: number;//declaração de variáveis

numero1 = leia.questionInt("Digite o primeiro numero: ");//leitura do primeiro número
numero2 = leia.questionInt("Digite o segundo numero: ");//leitura do segundo número

console.log(`${numero1} + ${numero2} e igual a: ${numero1 + numero2}`);//imprime a soma dos dois números