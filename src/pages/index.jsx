import { useState } from 'react'

import Presente from '../../components/Presente'
import Porta from '../../components/Porta'
import PortaModel from '../../model/porta'

export default function Home() {
  //Dessa forma iremos criar a constante p1 como
  const [p1, setP1] = useState(new PortaModel(1))
  
  return (
    <div style={{display: "flex"}}>
   
      
      <Porta porta={p1}/>

      {/* <Presente /> */}
    </div>
  )
}
