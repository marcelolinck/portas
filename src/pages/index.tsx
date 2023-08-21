import { useState } from "react";

import Presente from "../../components/Presente";
import Porta from "../../components/Porta";
import {atualizarPortas, criarPortas} from "../../functions/porta"
export default function Home() {
  //Dessa forma iremos criar a constante p1 como
const[portas, setPortas] = useState(criarPortas(3,2))

function renderizarPortas(){
  return portas.map(porta => {
    return <Porta key={porta.numero} value={porta} 
    onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
  })
}
  
  return (
    <div style={{ display: "flex"}}>

      {renderizarPortas()}
      {/* <Presente /> */}
    </div>
  );
}
