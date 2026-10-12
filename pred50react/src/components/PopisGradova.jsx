import { useState } from "react"
import StavkaGrad from "./StavkaGrad"

const PopisGradova = ({naslov, gradovi}) => { 

const [odabraniGrad, setOdabraniGrad] = useState("")

function odaberiGrad(naziv) {
    setOdabraniGrad(naziv)
}

return (
    <div>
        <h2>{naslov}</h2>
        {gradovi.length === 0 && <p>Nema gradova za prikaz.</p>}
        <ul>
            {gradovi.map((grad)=> (
                <StavkaGrad onOdaberi={odaberiGrad} key={grad.id} naziv={grad.naziv} odabran={grad.naziv === odabraniGrad} />
            ))}
        </ul>
        {odabraniGrad && <p>Odabrani grad: {odabraniGrad}</p>}
    </div>
  )
}

export default PopisGradova
