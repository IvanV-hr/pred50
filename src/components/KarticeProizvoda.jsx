const KarticeProizvoda = ({ proizvod }) => {
  return (
    <div className="kartica">
      <h3>{proizvod.title}</h3>
      <p>Cijena: {proizvod.price} $</p>
    </div>
  );
};
// zadatak implementirati detalje proizvoda u obliku modala

export default KarticeProizvoda;
