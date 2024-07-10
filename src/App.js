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
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHZnYTZpZ3p3dmV2dzB4aWdzM2cwc3NxaDhiN2U1NnFmZGtvYzc4OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X0jlolys0lSQ8Nmz0y/giphy.gif"
              alt="Gif1"
            />
          </div>
          <div>
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3J3b2s4NW5xMzFwazlmbHdwZndpNnZibTJobDN1Mmt4MzAxamxyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cRl2bfeKHW3IAzlpKx/giphy.gif"
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
