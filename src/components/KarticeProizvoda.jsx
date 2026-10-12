import { useState } from "react";
import Button from "./Button";
import ModalDetalji from "./ModalDetalji";

const KarticeProizvoda = ({ proizvod }) => {
  const [otvoren, setOtvoren] = useState(false);

  const detalji = [
    { naziv: "Kategrija", vrijednost: proizvod.category },
    { naziv: "Opis", vrijednost: proizvod.description },
    { naziv: "Ocjena", vrijednost: `${proizvod.rating} / 5` },
    { naziv: "Na zalihi", vrijednost: `${proizvod.stock} kom` },
  ];

  return (
    <div className="kartica">
      <h3>{proizvod.title}</h3>
      <p>Cijena: {proizvod.price} $</p>
      <Button onClick={() => setOtvoren(true)}>Detalji</Button>
      {otvoren && (
        <ModalDetalji
          naslov={proizvod.title}
          detalji={detalji}
          onZatvori={() => setOtvoren(false)}
        />
      )}
    </div>
  );
};
// zadatak implementirati detalje proizvoda u obliku modala

export default KarticeProizvoda;
