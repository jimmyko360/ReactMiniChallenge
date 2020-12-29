import React from "react";
import Fact from './Fact.jsx';
// TO DO: Create a FactsList functional component which maps through all of the animal facts in data.jsx and returns each item as a Fact component

// NOTE: In order to maintain CSS styling, do not alter the existing tags or their classNames
const FactsList = ({handleFavoriteClick, animalFacts}) => (
  <div className="factsList">
    {animalFacts.map(animalFact=>(<Fact handleFavoriteClick={handleFavoriteClick} animalFact={animalFact}/>))}
  </div>
);

export default FactsList;
