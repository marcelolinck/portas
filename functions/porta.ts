import PortaModel from "../model/porta"

//Por se tratar de um array de portas, o PortaModel deve ser iniciado com colchetes no final
export function criarPortas(qtde: number, portaComPresete: number):PortaModel[] {
    
    //Essa funcao é para criar um array de elementos com objeto
    return Array.from({length: qtde}, (_,i) => {
        const numero = i + 1
        const temPresente = numero === portaComPresete
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero
        if(igualAModificada){
            return portaModificada
        }else{
            return portaModificada.aberta ? portaAtual : portaAtual.deselecionada()
        }
    })
}