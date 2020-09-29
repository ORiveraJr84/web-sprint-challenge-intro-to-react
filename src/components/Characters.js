import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";
import styled from "styled-components";

const CharactersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Characters = () => {
  const [charactersArr, setCharactersArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return setCharactersArr(response.data.results);
      })
      .catch((err) => console.log("error", err));
  }, []);

  console.log("This is the characters Array ---> ", charactersArr);

  return (
    <CharactersWrapper>
      {charactersArr.map((character) => {
        return (
          <Character
            key={character.name}
            name={character.name}
            img={character.image}
            gender={character.gender}
            planet={character.origin.name}
            species={character.species}
            status={character.status}
          />
        );
      })}
    </CharactersWrapper>
  );
};

export default Characters;
