import { Atleta } from "./Atleta";
import { Corredor } from "./ICorredor";
import { Pessoa } from "./Pessoa";

export class Jogador extends Pessoa implements Atleta, Corredor {

    //Implementando métodos de Atleta
    public aquecer(): void {
        console.log("Jogador cansado!");
    }


    //Implementando método da interface Corredor
    correr(): void {
        console.log("Jogador correndo");
    }



    //Implementando métodos de Atleta
    public cansar(): void {
        console.log("Jogador cansou após 90 minutos de jogo!");
    }
    public dormir(): void {
        console.log("Jogador dormindo!");
    }

}