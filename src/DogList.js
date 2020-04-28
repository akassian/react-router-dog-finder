import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link to={`dogs/${dog.name}`}>
              <img alt={dog.name} src={dog.src} />
              <h3>{dog.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
