import PortaModel from "../model/porta";
import styles from "../src/styles/Porta.module.css";

interface PortaProps{
    porta: PortaModel
}

export default function Porta(props: PortaProps) {
  
  const { porta } = props
  const selecionada = porta.selecionada ? styles.selecionada : ''
  
  return (
    <div className={styles.area}>
      {/* Colocando a crase se pode colocar mais de uma classe dentro do style */}
      <div className={`${styles.estrutura} ${selecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
