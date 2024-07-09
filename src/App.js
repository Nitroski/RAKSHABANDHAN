// src/App.js
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Options from "./Options";
import Content from "./Content";
import PeopleList from "./PeopleList";
import "./App.css";

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
    setSelectedOption(null); // Reset option when a new person is selected
  };

  const handleClickOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>कवि कहना चाहते है...</h1>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="gif-carousel"
        >
          <div>
            <img
              src="https://media.discordapp.net/attachments/720631278415904816/1259839153286414406/60_64ee186f86a66.gif?ex=668dcce4&is=668c7b64&hm=7f94c7099969d7b6b407ecc7bfe29fb08cc65a9bf2c4a7b05f67167630f88d29&=&width=420&height=420"
              alt="Gif1"
            />
          </div>
          <div>
            <img
              src="https://media.discordapp.net/attachments/720631278415904816/1259840375695081504/85a305e1bde55071d5e60438da443bd1.gif?ex=668dce08&is=668c7c88&hm=8fcd02db9348fdaa8c9835581aba5ce1aa17839243311e9448c5114f1c290412&=&width=597&height=336"
              alt="Gif2"
            />
          </div>
        </Carousel>
      </header>
      {selectedPerson ? (
        <>
          <h2>
            कवि CRINGE KE LIYE MAFI CAHATE HAI:)[BTW CLICK YOU NAME AGAIN (ALSO
            SCROLL DOWN)]
          </h2>
          <Options onClickOption={handleClickOption} />
          {selectedOption && <Content selectedOption={selectedOption} />}
        </>
      ) : (
        <PeopleList onSelectPerson={handleSelectPerson} />
      )}
    </div>
  );
}

export default App;
