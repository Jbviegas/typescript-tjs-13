import leia = require("readline-sync");

let numero1: number, numero2: number;

numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");    

console.log(`${numero1} + ${numero2} e igual a: ${numero1 + numero2}`);