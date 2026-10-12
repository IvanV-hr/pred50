import KatalogSekcija from "./components/KatalogSekcija";
import PopisGradova from "./components/PopisGradova";

function App() {
  const gradovi = [
    { id: 1, naziv: "Zagreb" },
    { id: 2, naziv: "Split" },
    { id: 3, naziv: "Rijeka" },
    { id: 4, naziv: "Osijek" },
    { id: 5, naziv: "Sisak" },
  ];

  const americkiGradovi = [
    { id: 1, naziv: "New York" },
    { id: 2, naziv: "L.A." },
    { id: 3, naziv: "D.C." },
    { id: 4, naziv: "Miami" },
    { id: 5, naziv: "Houston" },
  ];

  return (
    <>
      <main>
        <PopisGradova naslov="Hrvatski gradovi" gradovi={gradovi} />
        <PopisGradova naslov="Americki gradovi" gradovi={americkiGradovi} />
        <KatalogSekcija />
      </main>
    </>
  );
}

export default App;
