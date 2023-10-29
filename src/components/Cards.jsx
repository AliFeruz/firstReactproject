import React from "react";


const Card = ({character, callback}) => {

  return (
    <div id={character.id}className="card">
      
      <div>
        <p>{character.species}</p>
      </div>

      <div>
        <img
          src={
            character.image !== "N/A"
              ? character.image
              : "https://via.palceholder.com/400"
          }
          alt={character.name}
        />
      </div>

      <div>
        <h3>{character.name}</h3>
        <button id={character.id}onClick={(e)=>callback(character)}>More info</button>
      </div>
     
    </div>
  );
};
export default Card;
