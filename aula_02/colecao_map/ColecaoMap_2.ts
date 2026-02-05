
import leia from "readline-sync";//importa o módulo readline-sync para leitura de dados do teclado

const participantes: Map<number, string> = new Map<number, string>();//cria um novo mapa com chave numérica e valor string

participantes.set(1, "Ana");//adiciona o participante com matrícula 1
participantes.set(2, "Samuel");//adiciona o participante com matrícula 2
participantes.set(3, "Leonardo");//adiciona o participante com matrícula 3
participantes.set(4, "Camila");//adiciona o participante com matrícula 4


// Adicionar um novo participante

let matricula = leia.questionInt("Digite o numero da matricula: ")//lê a matrícula do participante
let nome = leia.question("Digite o nome do participante: ")//lê o nome do participante

participantes.set(matricula, nome);//adiciona o participante lido do teclado

for(let [matricula, nome] of participantes){//itera sobre o mapa
    console.log(`Matrícula: ${matricula} - Nome: ${nome}`)//imprime a matrícula e o nome do participante
}

// Procurar um elemento pela chave
console.log("Existe a matrícula 2? ", participantes.has(2));//verifica se a matrícula 2 existe

// Procurar um elemento pelo valor
console.log("Existe a participante Ana? ", Array.from(participantes.values()).includes("Ana"));/* Converte os valores do mapa em um array e
verifica se a participante Ana existe */

// Iterar sobre as chaves
for(let matricula of participantes.keys()){//itera sobre as chaves do mapa
    console.log(matricula);//imprime a matrícula
}

// Procurar um valor com base na chave
console.log("Qual é o nome do aluno com a matrícula 3?", participantes.get(3));//busca o nome do participante com matrícula 3

// Remover um elemento
participantes.delete(3);//remove o participante com matrícula 3
console.log("Após remover o participante com matrícula 3:");

console.table(participantes);//imprime a tabela de participantes após a remoção