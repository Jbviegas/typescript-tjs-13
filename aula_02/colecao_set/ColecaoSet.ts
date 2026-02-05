
import leia = require("readline-sync");//import leia from "readline-sync";

const cores: Set<string> = new Set<string>();//set para armazenar as cores

cores.add("Azul");//inserir elementos
cores.add("Azul");//tentar inserir elemento duplicado
cores.add("Verde");//inserir outro elemento
cores.add("Vermelho");//inserir outro elemento
cores.add("Amarelo");//inserir outro elemento

cores.add(leia.question("Digite uma cor: "));//inserir elemento lido do teclado


for(let cor of cores){//iterar sobre o conjunto
    console.log(cor);//imprimir cada cor
}

console.log("A cor vermelho existe? ", cores.has("Vermelho"));//verificar se a cor vermelho existe

cores.delete("Vermelho");//remover a cor vermelho

console.log("Cores após remover vermelho:");//imprimir mensagem

for(let cor of cores){//iterar sobre o conjunto
    console.log(cor);//imprimir cada cor
}