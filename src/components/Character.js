// Write your Character component here
import React from "react";
import styled from "styled-components";

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 70%;
`;

const CharacterWrapper = styled.div`
  background-color: lightsalmon;
  width: 20%;
  padding: 2rem;
  margin: 2rem;
`;

const Character = ({ name, img, gender, planet, species, status }) => {
  console.log(name);
  return (
    <CharacterWrapper>
      <ProfilePic src={img} alt="" />
      <h1>{name}</h1>
      <p>{status}</p>
      <p>
        {gender}, {species}
      </p>
      <p>{planet}</p>
    </CharacterWrapper>
  );
};

export default Character;
