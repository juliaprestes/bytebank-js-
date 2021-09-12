export class Cliente {
    nome;
    cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this.cpf = cpf;
        this._senha = senha;
    }
    autenticar() {
        return true;
    }
}