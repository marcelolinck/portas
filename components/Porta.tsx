import PortaModel from "../model/porta";
import styles from "../src/styles/Porta.module.css";
import Presente from "../components/Presente";

interface PortaProps{
    value: PortaModel
    //Este é um novo parametro que quando usado irá chamar uma nova instancia do Porta model mas sem nenhum dado.
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
  
  const porta  = props.value
  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''
  
  const alternarSelecao = e => props.onChange(porta.alterarSelecao())
  const abrir = e =>{
    e.stopPropagation()
    props.onChange(porta.abrir())
  }
  function renderizarPorta(){
    return(

      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>

    </div>
    )
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
      {porta.fechada ? renderizarPorta() : porta.temPresente ? <Presente /> : false }
      {/* Colocando a crase se pode colocar mais de uma classe dentro do style */}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
