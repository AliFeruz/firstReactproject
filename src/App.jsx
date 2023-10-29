import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./components/Cards";
import Header from "./components/Header";
import Modal from "./components/Modal";

const url = "https://rickandmortyapi.com/api/character/";

const App = () => {
  const [characters, setCharacter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [chosencharacter, setchosencharacter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const searchCharacters = async (Title) => {
    const response = await fetch(`${url}${Title}`);
    const data = await response.json();
    console.log(data.results);
    setCharacter(data.results);
  };

 const handleClick = (character) => {
    setchosencharacter(character);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    searchCharacters(searchTerm);
  }, [searchTerm]);

  console.log("chosencharacter :>> ", chosencharacter);
  console.log('showModal :>> ', showModal);

  return (
    <div className="app">
      <Header />
      <div className="search">
        <input
          placeholder="Search for characters"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchCharacters(searchTerm)}
        />
      </div>

            {showModal && (
        <Modal character={chosencharacter} onClose={closeModal} />
      )}

      {characters?.length > 0 ? (
        <div className="container">
          {characters.map((character) => (
            <Card
              character={character}
              key={character.id}
              callback={handleClick}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No character found</h2>
        </div>
      )}


      
    </div>
  );
};

export default App;

