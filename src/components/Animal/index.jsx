import React from "react";
import "./style.css";
import AnimalDetail from "../AnimalDetail";

const Animal = ({ image, name, latin, onClick}) => {


  return (
    <div onClick = {onClick}  className="animal">
      <div className="animal__image">
        <img src={image} alt={name} />
      </div>
      <div className="animal__desc">
        <div className="animal__name">{name}</div>
        <div className="animal__latin">{latin}</div>
      </div>
    </div>
  );
};

export default Animal;
