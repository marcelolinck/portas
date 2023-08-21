import { useState } from "react";

import Presente from "../../components/Presente";
import Porta from "../../components/Porta";
import {atualizarPortas, criarPortas} from "../../functions/porta"
export default function Home() {
  //Dessa forma iremos criar a constante p1 como
const[portas, setPortas] = useState(criarPortas(4,1))

  
  return (
    <div style={{ display: "flex"}}>
      <h1>Formulário de Início</h1>
    </div>
  );
}
