import React from "react";

const Modal = ({ character, onClose }) => {
  console.log('character in modal:>> ', character);
  return (
    <div className="modal">
      
      <div>
          <h3>
            {character.species}
          </h3>
          <button onClick={onClose}>X</button>
      </div>

      <div className="info">
      <div>
        <img
          src={
            character.image !== "N/A"
              ? character.image
              : "https://via.placeholder.com/400"
          }
          alt={character.name}
        />
      </div>

      <div className="infotext">
        <h3>{character.name}</h3>
        <p>
          {"Location: "+character.location.name}
        </p>
        <p>
          {"Status: "+character.status}
        </p>
      </div>


      </div>
      
    
       
      
    </div>
  );
};

export default Modal;
