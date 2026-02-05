import { Atleta } from "./Atleta";
import { Ciclista } from "./ICiclista";
import { Corredor } from "./ICorredor";
import { Nadador } from "./INadador";
import { Pessoa } from "./Pessoa";

export class TriAtleta extends Pessoa implements Atleta, Ciclista, Corredor, Nadador {

    //Implementando métodos da interface Atleta
    public aquecer(): void {
        console.log("TriAtleta aquecendo");
    }

    //Implementando os métodos das interfaces
    public pedalar(): void {
        console.log("TriAtleta pedalando.");
    }
    public correr(): void {
        console.log("TriAtleta correndo.");
    }
    public nadar(): void {
        console.log("TriAtleta nadando.");
    }

    //Implementando métodos abstratos da classe Pessoa
    public cansar(): void {
        console.log("TriAtleta cansado.");
    }

    public dormir(): void {
        console.log("TriAtleta dormindo.");
    }

}