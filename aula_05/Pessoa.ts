export abstract class Pessoa {

    // Atributo
    private _nome: string;

    //Método Construtor

	constructor(nome: string) {
		this._nome = nome;
	}
    
    //Métodos Getters e Setters
	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

    //Métodos específicos

    public abstract cansar(): void;
    public abstract dormir(): void;

    public visualizar(): void {
        console.log("Nome: ", this._nome);
    }

}