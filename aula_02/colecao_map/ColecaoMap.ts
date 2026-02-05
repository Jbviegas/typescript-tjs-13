
import leia = require("readline-sync");//importa o módulo readline-sync para leitura de dados do teclado

const participantes: Map<number, string> = new Map<number, string>();//cria um novo mapa com chave numérica e valor string

participantes.set(1, "Alice");//adiciona o participante com matrícula 1
participantes.set(2, "Bob");//adiciona o participante com matrícula 2
participantes.set(3, "Carlos");//adiciona o participante com matrícula 3
participantes.set(4, "Diana");//adiciona o participante com matrícula 4

let matriculaBusca = parseInt(leia.question("Digite a matrícula do participante que deseja buscar: "));//lê a matrícula do participante buscado

let nomeParticipante = participantes.get(matriculaBusca);//busca o nome do participante com a matrícula informada
if (nomeParticipante) {//verifica se o participante foi encontrado
    console.log(`Participante encontrado: ${nomeParticipante}`);//imprime o nome do participante encontrado
} else {//se não encontrado
    console.log("Participante não encontrado.");//imprime mensagem de não encontrado
}

