import React, { useState } from "react";
import AnimalDetail from "../AnimalDetail";
import Animal from "./../Animal";
import "./style.css";

const AnimalList = ({ data }) => {
  const [selectedAnimal, setSelectedAnimal] = useState(data[0]);

  const handleClick = (animal) => {
    setSelectedAnimal(animal);
  };
  return (
    <>
      <div className="animal-list">
        {data.map((animal) => (
          <Animal
            onClick={() => {
              handleClick(animal);
            }}
            image={animal.foto}
            name={animal.nazev}
            latin={animal.nazevLatinsky}
            key={animal.id}
          />
        ))}
      </div>
      <AnimalDetail
        foto={selectedAnimal.foto}
        nazevLatinsky={selectedAnimal.nazevLatinsky}
        popis={selectedAnimal.popis}
        domovina={selectedAnimal.domovina}
        biotop={selectedAnimal.biotop}
        potrava={selectedAnimal.potrava}
        velikost={selectedAnimal.velikost}
        zoo={selectedAnimal.zoo}
      />
    </>
  );
};

export default AnimalList;
