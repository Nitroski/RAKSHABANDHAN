// PoemDisplay.js
import React from "react";

const PoemDisplay = ({ selectedPerson }) => {
  const poems = {
    "Person 1": "Roses are red, violets are blue...",
    "Person 2": "In the quiet of the night, stars whisper...",
    "Person 3": "Once upon a time, in a land far away...",
  };

  const poem = poems[selectedPerson] || "Select a person to read their poem.";

  return (
    <div>
      <p>{poem}</p>
    </div>
  );
};

export default PoemDisplay;
