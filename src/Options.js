// src/Options.js
import React from "react";
import "./Options.css";

const options = [
  { id: "option1", name: "ADITI" },
  { id: "option2", name: "DHUVRIKA AKKA" },
  { id: "option3", name: "ISHITA" },
  { id: "option4", name: "ISHRAT" },
  { id: "option5", name: "KANISHKA" },
  { id: "option6", name: "KASHISH" },
  { id: "option7", name: "KRISHA" },
  { id: "option8", name: "KRISHNAVI" },
  { id: "option9", name: "KRISSY" },
  { id: "option10", name: "KUHU" },
  { id: "option11", name: "KHUSHI" },
  { id: "option12", name: "MUGDHA" },
  { id: "option13", name: "NAVYA" },
  { id: "option14", name: "PAA" },
  { id: "option15", name: "SEJAL AKKA" },
  { id: "option16", name: "SIYAAA" },
  { id: "option17", name: "TIANA" },
  { id: "option18", name: "TWINKLE" },
  { id: "option19", name: "YASHAVI AKKA" },
];

function Options({ onClickOption }) {
  return (
    <div className="options-container">
      {options.map((option) => (
        <button key={option.id} onClick={() => onClickOption(option.id)}>
          {option.name}
        </button>
      ))}
    </div>
  );
}

export default Options;
