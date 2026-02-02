import leia = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(5);
numeros.push(1,5,7,9);
numeros.push(leia.questionInt("Digite um numero: "));


for(let numero of numeros){
    console.log(numero);
}

console.log("O numero 5 existe? ", numeros.includes(5));
console.log("O indice do numero 5? ", numeros.indexOf(5));

numeros.splice(numeros.indexOf(5),1);

console.table(numeros);
