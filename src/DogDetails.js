import React from "react";
import { Link, useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  let dog;
  for (let d of dogs) {
    if (d.name === name) {
      dog = d;
      break;
    }
  }
  const { age, src, facts } = dog;
  return (
    <div>
      <h1>{name}</h1>
      <img src={src} alt={name} />
      <ul>
        <li>{age}</li>
        {facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
