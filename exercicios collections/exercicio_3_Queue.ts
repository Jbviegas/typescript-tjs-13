import leia from "readline-sync";//importa o módulo readline-sync para leitura de dados do teclado
import { Queue } from "../aula_02/fila/Queue";//importa a classe Queue do arquivo Queue.ts

const fila = new Queue<string>();//cria uma nova fila de strings


let opcao: number = NaN;


while (opcao !== 0 || isNaN(opcao)) {

   console.log("\n");
   console.log("=== Sistema de Atendimento ===");
   console.log("\n");

   console.log("1 - Adicionar cliente na fila");
   console.log("2 - Listar todos os clientes na fila");
   console.log("3 - Chamar o próximo cliente");
   console.log("0 - Sair do programa");

   console.log("\n");

   opcao = leia.questionInt("Escolha uma opcao: ");
   console.log("\n");

   if (opcao === 1) {
      fila.enqueue(leia.question("Digite o nome do cliente: "))//adiciona um nome lido do teclado na fila
      console.log("\n");

      console.log("Cliente adicionado com sucesso!");
      console.log("\n");


   } else if (opcao === 2) {

      console.log("Lista de clientes na fila:");
      console.log("\n");

      fila.printQueue(); //imprime os elementos da fila

      console.log("\n");
   }

   else if (opcao === 3) {

      console.log(`Removendo: ${fila.peek()} da fila`); //imprime o elemento que está no início da fila
      console.log("\n");

      fila.dequeue(); //remove o elemento do início da fila

      console.log(`Cliente removido da fila com sucesso!`); //imprime o elemento que está no início da fila
      console.log("\n");

      console.log("Lista de clientes na fila:");
      console.log("\n");

      fila.printQueue(); //imprime os elementos da fila

   }


} if (opcao === 0) {
   console.log("Programa Finalizado!");
   process.exit();
}



