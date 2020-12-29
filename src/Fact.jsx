import React from "react";
// TO DO: Create a Fact Functional component which returns a div in the format below

// NOTE: In order to maintain CSS styling, do not alter the existing tags or their classNames
const Fact = ({handleFavoriteClick, animalFact}) => (
    <div className="factCard">
      <h1>{animalFact.animal}</h1>
      {/* TODO: Attach an onClick event to the button */}
      <button onClick={handleFavoriteClick} value={animalFact.animal}>
        Click to favorite
      </button>
      <img src={animalFact.image} width="600" height="400" />
      <h3>{animalFact.fact}</h3>
    </div>
);

export default Fact;
