import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  useParams,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./NavBar";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import whiskey from "./dogs/whiskey.jpg";
import perry from "./dogs/perry.jpg";
import tubby from "./dogs/tubby.jpg";
import duke from "./dogs/duke.jpg";

function App({ dogs }) {
  // let name;
  return (
    <BrowserRouter>
      <NavBar dogs={dogs} />
      <Switch>
        <Route exact path="/dogs">
          <DogList dogs={dogs} />
        </Route>
        <Route path="/dogs/:name">
          {/* {({ name } = useParams())} */}
          <DogDetails dogs={dogs} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </BrowserRouter>
  );
}

function findDog(name, dogs) {
  let dog;
  for (let d of dogs) {
    if (d.name === name) {
      dog = d;
      break;
    }
  }
  return dog;
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
