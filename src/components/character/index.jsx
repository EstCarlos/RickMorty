import React, { useState, useEffect } from "react";

export const Personaje = ({ id }) => {
  let urlCharacters = `https://rickandmortyapi.com/api/character/${id}`;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchAPI();
  }, [urlCharacters]);

  const fetchAPI = async () => {
    await fetch(urlCharacters)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.log(error));
  };

  function statusCharacter(status) {
    switch (status) {
      case "Alive":
        return <span className="circulStatus alive" />;
      // break;
      case "Dead":
        return <span className="circulStatus dead" />;
      // break;
      case "unknown":
        return <span className="circulStatus unknown" />;
      // break;
    }
  }

  return (
    <div className="chacter">
      <img src={character.img} alt={`Photo ${character.name}`} />
      <h1>{character.name}</h1>
      {statusCharacter(character.status)}
      {character.status} - {character.species}
    </div>
  );
};
