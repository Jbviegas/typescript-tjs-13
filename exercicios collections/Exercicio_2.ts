import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>();


while(numeros.size < 10){
    const numero = leia.question("Digite um numero: ");
    numeros.add(parseInt(numero));
}

for(let numero of numeros){
    console.log(numero);
}


console.log("Numeros por ordem Numerica:");
const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);
for(let numero of numerosOrdenados){
    console.log(numero);
}