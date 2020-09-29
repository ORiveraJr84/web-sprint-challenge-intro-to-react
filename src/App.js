import React from "react";
import "./reset.css";
import "./App.css";
import Characters from "./components/Characters";
import styled from "styled-components";

const H1 = styled.h1`
  color: red;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <H1>Rick & Morty Characters</H1>
      <Characters />
    </div>
  );
};

export default App;
