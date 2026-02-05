
import leia from "readline-sync";//importa o módulo readline-sync para leitura de dados do teclado
import { Queue } from "./Queue";//importa a classe Queue do arquivo Queue.ts

const fila = new Queue<string>();//cria uma nova fila de strings

fila.enqueue("Renan");//adiciona o nome "Renan" na fila
fila.enqueue("Vivian");
fila.enqueue("Erick");

fila.enqueue(leia.question("Digite um nome: "))//adiciona um nome lido do teclado na fila

console.log("*** Fila Original ***")
fila.printQueue();//imprime os elementos da fila

console.log("\n")//quebra de linha

fila.dequeue();//remove o elemento do início da fila

console.log("*** Fila após a remoção de um elemento ***")
fila.printQueue();

console.log("\n");

console.log("Tamanho da fila: ", fila.count());//imprime o tamanho da fila

let busca = "Erick";//nome a ser buscado na fila
busca.toLowerCase;//converte o nome para minúsculas

console.log("O Erick está na fila? ", fila.contains(busca));//imprime se o nome está na fila
console.log("\n");

console.log("Elemento no início da fila: ", fila.peek());//imprime o elemento que está no início da fila
console.log("\n");

console.log("Fila vazia? ", fila.isEmpty());//verifica se a fila está vazia e imprime o resultado
console.log("\n");

fila.clear();//limpa a fila

console.log("Fila após o clear: ");
fila.printQueue();//imprime os elementos da fila após o clear
console.log("\n");

console.log("Fila vazia? ", fila.isEmpty());//verifica se a fila está vazia e imprime o resultado