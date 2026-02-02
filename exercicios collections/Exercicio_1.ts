import leia = require("readline-sync");

const cores: string[] = [];

while (cores.length < 5) {
    const cor = leia.question("Digite uma cor: ");
    cores.push(cor);
}

console.log("Cores digitadas:");
for (let cor of cores) {
    console.log(cor);
}

console.log("Cores em ordem alfabética:");
const coresOrdenadas = [...cores].sort();
for (let cor of coresOrdenadas) {
    console.log(cor);
}
