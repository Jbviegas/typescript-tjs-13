
import leia = require("readline-sync"); //import leia from "readline-sync";

const numeros: Array<number> = new Array<number>();//const numeros: number[] = []; criar um array vazio para armazenar números

numeros.push(5);//inserir um elemento
numeros.push(1,5,7,9);//inserir vários elementos de uma vez
numeros.push(leia.questionInt("Digite um numero: "));//inserir um elemento lido do teclado


for(let numero of numeros){//iterar sobre o array
    console.log(numero);//imprimir cada número
}

console.log("O numero 5 existe? ", numeros.includes(5));//verificar se o número 5 existe

console.log("O indice do numero 5? ", numeros.indexOf(5));//procurar o índice do número 5


numeros.splice(numeros.indexOf(5),1);//remover o número 5 (apenas a primeira ocorrência) -> numeros.splice(0, 1);


console.table(numeros);//imprimir o array em formato de tabela


/* -----  Splice e Slice  -----

Comparação lado a lado de splice (remove) e slice (copia)


const numeros = [1, 2, 3, 4];

🔴 splice (REMOVE)

numeros.splice(1, 3);

console.log(numeros);
// [1]

🟢 slice (COPIA)

const copia = numeros.slice(1, 4);

console.log(copia);
// [2, 3, 4]

console.log(numeros);
// [1, 2, 3, 4]

*/