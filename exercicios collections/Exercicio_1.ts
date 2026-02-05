
import leia = require("readline-sync");//import leia from "readline-sync";

const cores: string[] = [];//array para armazenar as cores

while (cores.length < 5) {//loop até ter 5 cores
    const cor = leia.question("Digite uma cor: ");//lê a cor do teclado
    cores.push(cor);//adiciona a cor ao array
}

console.log("Cores digitadas:");//imprime mensagem
for (let cor of cores) {//itera sobre o array
    console.log(cor);//imprime cada cor
}

console.log("Cores em ordem alfabética:");//imprime mensagem
const coresOrdenadas = [...cores].sort();//cria uma cópia do array e ordena em ordem alfabética
for (let cor of coresOrdenadas) {//itera sobre o array ordenado
    console.log(cor);//imprime cada cor
}
