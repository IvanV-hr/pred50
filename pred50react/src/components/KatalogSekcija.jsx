import { useState } from "react"
import Button from "./Button"
import KarticeProizvoda from "./KarticeProizvoda"

const KatalogSekcija = () => {
    const [proivodi, setProizvodi] = useState([])
    const [poruka, setPoruka] = useState("")

   async function ucitajProizvode() {
        setPoruka("Ucitavanje proizvoda...")
        try {
            const odgovor = await fetch('https://dummyjson.com/products/category/smartphones')
            if (!odgovor.ok) throw new Error()
            const proivodi = (await odgovor.json()).products
            setProizvodi(proivodi)
            setPoruka("")
        } catch {
            setPoruka("Doslo je do greske")
        }
    }

  return (
    <section className="section">
        <h2>Katalog</h2>
        {!proivodi.length && <Button onClick={()=>ucitajProizvode()}>Ucitaj proizvode</Button>}
        {poruka && <p>{poruka}</p>}
        <div className="kartice">
            {proivodi.map((proizvod)=> <KarticeProizvoda key={proizvod.id} proizvod={proizvod}/>)}
        </div>
    </section>
  )
}

export default KatalogSekcija
