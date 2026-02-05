import leia = require("readline-sync");//import leia from "readline-sync";

const numeros: Set<number> = new Set<number>();//set para armazenar os numeros


while(numeros.size < 10){
    const numero = leia.question("Digite um numero: ");//lê o numero do teclado
    numeros.add(parseInt(numero));//adiciona o numero ao set
}

for(let numero of numeros){//itera sobre o set
    console.log(numero);//imprime cada numero
}


console.log("Numeros por ordem Numerica:");//imprime mensagem
const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);//cria um array a partir do set e ordena em ordem numerica
for(let numero of numerosOrdenados){//itera sobre o array ordenado
    console.log(numero);//imprime cada numero
}

/*
Exemplos práticos
🔹 Exemplo 1
a = 2
b = 5

a - b = 2 - 5 = -3


➡ Resultado negativo
➡ 2 vem antes de 5

🔹 Exemplo 2
a = 8
b = 3

a - b = 8 - 3 = 5


➡ Resultado positivo
➡ 3 vem antes de 8

🔹 Exemplo 3
a = 4
b = 4

a - b = 0


➡ Resultado zero
➡ Não muda a ordem

4️⃣ Por que a - b ordena em ordem crescente?

Porque:

Se a for menor, o resultado é negativo → a vai pra frente

Se a for maior, o resultado é positivo → b vai pra frente

📈 Resultado final:

[1, 2, 3, 4, 5]

5️⃣ E se fosse ordem decrescente?

Basta inverter:

.sort((a, b) => b - a)


Exemplo:

[1, 5, 3] → [5, 3, 1]

6️⃣ Por que isso é necessário?

Sem essa função:

.sort()


O JavaScript ordena como texto:

[1, 10, 2] → [1, 10, 2] ❌


Com (a, b) => a - b:

[1, 10, 2] → [1, 2, 10] ✅

🧠 Resumo rápido

a e b são dois números do array

O sort compara eles o tempo todo

a - b diz quem vem antes

Negativo → a primeiro

Positivo → b primeiro
*/