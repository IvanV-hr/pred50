import Button from "./Button";

const ModalDetalji = ({ naslov, detalji, onZatvori }) => {
  return (
    <div className="modal-overlay" onClick={onZatvori}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{naslov}</h2>
        <Button onClick={onZatvori}>Zatvori</Button>
      </div>
    </div>
  );
};

export default ModalDetalji;
