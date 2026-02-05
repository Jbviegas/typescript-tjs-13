import leia from "readline-sync";//importa o módulo readline-sync para leitura de dados do teclado
import { Stack } from "../aula_02/pilha/Stack";//importa a classe Queue do arquivo Queue.ts

const pilha = new Stack<string>();//cria uma nova fila de strings


let opcao: number = NaN;


while (opcao !== 0 || isNaN(opcao)) {

   console.log("\n");
   console.log("=== Sistema de Gerenciamento de Livros ===");
   console.log("\n");

   console.log("1 - Adicionar um novo livro no sistema");
   console.log("2 - Listar todos os livros");
   console.log("3 - Retirar livro do sistema");
   console.log("0 - Sair");

   console.log("\n");

   opcao = leia.questionInt("Escolha uma opcao: ");
   console.log("\n");

   if (opcao === 1) {
      pilha.push(leia.question("Digite o nome do livro: "))//adiciona um nome lido do teclado na fila
      console.log("\n");

      console.log("Livro adicionado com sucesso!");
      console.log("\n");


   } else if (opcao === 2) {

      console.log("Lista de livros no sistema:");
      console.log("\n");

      pilha.printStack(); //imprime os elementos da fila

      console.log("\n");
   }

   else if (opcao === 3) {

      console.log(`Removendo o livro: ${pilha.peek()} do sistema`); //imprime o elemento que está no início da fila
      console.log("\n");

      pilha.pop(); //remove o elemento do início da fila

      console.log(`Livro removido do sistema com sucesso!`); //imprime o elemento que está no início da fila
      console.log("\n");

      console.log("Lista de livros no Sistema:");
      console.log("\n");

      pilha.printStack(); //imprime os elementos da fila

   }


} if (opcao === 0) {
   console.log("Programa Finalizado!");
   process.exit();
}



