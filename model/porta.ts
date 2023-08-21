export default class PortaModel{
    //# diz que o atributo é privado
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, temPresente = false, selecionada = false, aberta = false){
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero(){
        return this.#numero
    }
    get temPresente(){
        return this.#temPresente
    }
    get selecionada(){
        return this.#selecionada
    }
    get aberta(){
        return this.#aberta
    }
    get fechada(){
        return !this.aberta
    }

    deselecionada(){
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    alterarSelecao(){

        const selecionada = !this.selecionada

        // Dessa forma estamos criando um novo objeto Port, mas permanecendo a portaModel original como de costume
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir(){
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }
}