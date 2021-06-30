import React, { Fragment, useState, useEffect } from "react";
import Character from "../components/characters/index";
import Buscador from "../components/buscador";
import "../styles/Home.css";
import Logo from "../images/rick-morty.png";

const Home = () => {
  let urlCharacters = `https://rickandmortyapi.com/api/character/`;
  let dataURL = {
    info: {},
    character: [],
    error: "",
  };

  const [characters, setCharacters] = useState(dataURL);
  const [url, setURL] = useState(urlCharacters);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchAPI = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) =>
          setCharacters({
            character: data.results,
            info: data.info,
            error: data.error,
          })
        )
        .catch((error) => console.log(error));
    };
    fetchAPI();
  }, [url]);

  const nextPage = () => {
    setURL(characters.info.next);
    setPage(page + 1);
    scroll();
  };

  const prevPage = () => {
    if (characters.info.prev != null) {
      setURL(characters.info.prev);
      setPage(page - 1);
      scroll();
    }
  };
  const scroll = () => {
    const elemento = document.querySelector(".container");
    elemento.scrollIntoView("auto", "start");
  };

  const searchData = (data) => {
    urlCharacters = `https://rickandmortyapi.com/api/character/?name=${data}`;
    setURL(urlCharacters);
    setPage(1);
  };

  return (
    <div className="container">
      <Fragment>
        <img src={Logo} height="100" className="logo" alt="logo" />
        <Buscador searchData={searchData} />
        <Character
          character={characters}
          prevPage={prevPage}
          nextPage={nextPage}
          page={page}
        />
      </Fragment>
    </div>
  );
};

export default Home;
