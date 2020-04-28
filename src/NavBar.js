import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ dogs }) {
  return dogs.map((dog) => (
    <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
  ));
}

export default NavBar;
