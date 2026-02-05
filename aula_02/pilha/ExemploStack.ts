import leia from "readline-sync";
import { Stack } from "./Stack";

const pilha = new Stack<string>();

pilha.push("Renan");//adiciona o nome "Renan" na pilha
pilha.push("Vivian");//adiciona o nome "Vivian" na pilha
pilha.push("Erick");//adiciona o nome "Erick" na pilha

pilha.push(leia.question("Digite um nome: "))//adiciona um nome lido do teclado na pilha

console.log("*** Pilha Original ***")
pilha.printStack();//imprime os elementos da pilha

console.log("\n")//quebra de linha

pilha.pop();//remove o elemento do topo da pilha

console.log("*** pilha após a remoção de um elemento ***")
pilha.printStack();//imprime os elementos da pilha

console.log("\n");//quebra de linha

console.log("Tamanho da pilha: ", pilha.count());//imprime o tamanho da pilha

console.log("\n");//quebra de linha

let busca = "Erick";//nome a ser buscado na pilha
busca.toLowerCase;//converte o nome para letras minúsculas

console.log("O Erick está na pilha? ", pilha.contains(busca));//verifica se o nome "Erick" está na pilha e imprime o resultado

console.log("\n");//quebra de linha

console.log("Elemento no topo da pilha: ", pilha.peek());//imprime o elemento que está no topo da pilha

console.log("\n");//quebra de linha

console.log("Pilha vazia? ", pilha.isEmpty());//verifica se a pilha está vazia e imprime o resultado

console.log("\n");//quebra de linha

pilha.clear();//limpa a pilha

console.log("Pilha após o clear: ");
pilha.printStack();//imprime os elementos da pilha após o clear

console.log("\n");//quebra de linha

console.log("Pilha vazia? ", pilha.isEmpty());//verifica se a pilha está vazia e imprime o resultado