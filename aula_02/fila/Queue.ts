
interface queueInterface<Type> {//definição da interface queueInterface
   enqueue(dataItem: Type): void;//adicionar um elemento na fila
   dequeue(): Type | undefined;//remover um elemento da fila
   isEmpty(): boolean;//verificar se a fila está vazia
   count(): number;//retornar o número de elementos na fila
   printQueue(): void;//imprimir os elementos da fila
   peek(): Type | undefined;//consultar o elemento da frente sem remover
   contains(dataItem: Type): boolean;//verificar se um elemento está na fila
   clear(): void;//remover todos os elementos da fila
}

export class Queue<Type> implements queueInterface<Type> {//definição da classe Queue que implementa a interface queueInterface

   private QueueData: Array<Type> = [];//array para armazenar os elementos da fila

   constructor() { }//construtor da classe

   isEmpty(): boolean {//verificar se a fila está vazia
      let result = this.QueueData.length <= 0;//verifica se o tamanho do array é menor ou igual a 0
      return result;//retorna o resultado da verificação
   }

   enqueue(dataItem: Type): void {//adicionar um elemento na fila
      this.QueueData.push(dataItem);//adiciona o elemento no final do array
   }

   dequeue(): Type | undefined {//remover um elemento da fila
      if (this.isEmpty()) {//verifica se a fila está vazia
         console.log("A fila está vazia");// mensagem de aviso
         return;//retorna vazio
      } else {//se não estiver vazia
         var element = this.QueueData.shift();//remove o elemento do início do array
         return element;//retorna o elemento removido
      }
   }

   count(): number {//retornar o número de elementos na fila
      let len = this.QueueData.length;//pega o tamanho do array
      return len;//retorna o tamanho do array
   }

   printQueue(): void {//imprimir os elementos da fila
      console.log("");//imprime a mensagem
      for (let i = 0; i < this.QueueData.length; i++) {//percorre o array
         console.log(this.QueueData[i]);//imprime o elemento atual
      }
   }

   peek(): Type | undefined {//consultar o elemento da frente sem remover
      if (this.isEmpty()) {//verifica se a fila está vazia
         console.log("A fila está vazia");// mensagem de aviso
         return;//retorna vazio
      } else {//se não estiver vazia
         var element = this.QueueData[0];//pega o elemento da frente
         return element;//retorna o elemento da frente
      }
   }

   contains(dataItem: Type): boolean {//verificar se um elemento está na fila
      if (this.QueueData.includes(dataItem)) {//verifica se o array contém o elemento
         return true;//retorna true se encontrar
      } else {//se não encontrar
         return false;//retorna false
      }
   }

   clear(): void {//remover todos os elementos da fila
      this.QueueData.length = 0;//remove todos os elementos do array
   }

}
