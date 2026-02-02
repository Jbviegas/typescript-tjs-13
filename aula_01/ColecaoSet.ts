import leia = require("readline-sync");

const cores: Set<string> = new Set<string>();

cores.add("Azul");
cores.add("Azul");
cores.add("Verde");
cores.add("Vermelho");
cores.add("Amarelo");
cores.add(leia.question("Digite uma cor: "));


for(let cor of cores){
    console.log(cor);
}

console.log("A cor vermelho existe? ", cores.has("Vermelho"));

cores.delete("Vermelho");
console.log("Cores após remover vermelho:");
for(let cor of cores){
    console.log(cor);
}