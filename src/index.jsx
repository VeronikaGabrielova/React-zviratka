import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./../img/zoo.jpg";
import AnimalList from "./components/AnimalList";
import Search from "./components/Search";

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data.zvirata);
        setFilteredAnimals(data.zvirata);
      });
  }, []);

  const handleSearch = (event) => {
    const text = event.target.value;

    const filtered = animals.filter(
      (animal) =>
        animal.nazev.toLowerCase().includes(text.toLowerCase()) ||
        animal.nazevLatinsky.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredAnimals(filtered);
  };

  return (
    <>
      <h1>Zvířátka v ZOO</h1>
      <Search onChange={handleSearch} />

      <div className="container">
        {filteredAnimals.length === 0 ? (
          <div style={{ color: "white", margin: "0 auto" }}>
            Položka nenalezena
          </div>
        ) : (
          <AnimalList data={filteredAnimals} />
        )}
      </div>
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
