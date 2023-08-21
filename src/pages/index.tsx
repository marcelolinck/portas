import { useState } from "react";

import Presente from "../../components/Presente";
import Porta from "../../components/Porta";
import PortaModel from "../../model/porta";

export default function Home() {
  //Dessa forma iremos criar a constante p1 como
  const [p1, setP1] = useState(new PortaModel(1));
  const [texto, setTexto] = useState("...")
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)} />
      {/* <Presente /> */}
    </div>
  );
}
