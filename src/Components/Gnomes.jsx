import React from "react";
import "../Sass/Styles/Gnomes.scss";

export default function Gnomes({ name, image, age }) {
  return (
    <div className="gnomescontainer">
      <img className="gnomesimage" src={image} alt={name} />
      <div className="gnomesdata">
        <h1 className="gnomesname">{name}</h1>
        <h1 className="gnomesage">({age} years old)</h1>
      </div>
    </div>
  );
}
