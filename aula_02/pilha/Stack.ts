interface stackInterface<Type> {//definição da interface stackInterface
    push(dataItem: Type): void;//adicionar um elemento na pilha
    pop(): Type | undefined;//remover um elemento da pilha
    isEmpty(): boolean;//verificar se a pilha está vazia
    count(): number;//retornar o número de elementos na pilha
    printStack(): void;//imprimir os elementos da pilha
    peek(): Type | undefined;//consultar o elemento do topo sem remover
    contains(dataItem: Type): boolean;//verificar se um elemento está na pilha
    clear(): void;//remover todos os elementos da pilha
 }
 
 export class Stack<Type> implements stackInterface<Type> {//definição da classe Stack que implementa a interface stackInterface
 
    private StackData: Array<Type> = [];//array para armazenar os elementos da pilha
 
    constructor() { }//construtor da classe
 
    isEmpty(): boolean {//verificar se a pilha está vazia
       let result = this.StackData.length <= 0;//verifica se o tamanho do array é menor ou igual a 0
       return result;//retorna o resultado da verificação
    }
 
    push(dataItem: Type): void {//adicionar um elemento na pilha
       this.StackData.push(dataItem);//adiciona o elemento no final do array
    }
 
    pop(): Type | undefined {//remover um elemento da pilha
       if (this.isEmpty()) {//verifica se a pilha está vazia
          console.log("Vazio");// mensagem de aviso
          return;//retorna vazio
       } else {//se não estiver vazia
          var element = this.StackData.pop();//remove o elemento do final do array
          return element;//retorna o elemento removido
       }
    }
 
    count(): number {//retornar o número de elementos na pilha
       let len = this.StackData.length;//pega o tamanho do array
       return len;//retorna o tamanho do array
    }
 
    printStack(): void {//imprimir os elementos da pilha
       console.log("");//imprime a mensagem
       for (let i = this.StackData.length - 1; i >= 0 ; i--) {//percorre o array de trás para frente
          console.log(this.StackData[i]);//imprime o elemento atual
       }
    }
 
    peek(): Type | undefined {//consultar o elemento do topo sem remover
       if (this.isEmpty()) {//verifica se a pilha está vazia
          console.log("A fila está vazia");// mensagem de aviso
          return;//retorna vazio
       } else {//se não estiver vazia
          var element = this.StackData[this.StackData.length - 1];//pega o elemento do topo
          return element;//retorna o elemento do topo
       }
    }
 
    contains(dataItem: Type): boolean {//verificar se um elemento está na pilha
       if (this.StackData.includes(dataItem)) {//verifica se o array contém o elemento
          return true;//retorna true se encontrar
       } else {//se não encontrar
          return false;//retorna false
       }
    }
 
    clear(): void {//remover todos os elementos da pilha
       this.StackData.length = 0;//define o tamanho do array como 0, removendo todos os elementos
    }
 
 }
