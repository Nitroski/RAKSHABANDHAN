// src/PeopleList.js
import React, { useState } from "react";
import "./PeopleList.css";

const people = [
  "ADITI",
  "DHUVRIKA AKKA",
  "ISHITA",
  "ISHRAT",
  "KANISHKA",
  "KASHISH",
  "KRISHA",
  "KRISHNAVI ",
  "KRISSY",
  "KUHU",
  "KHUSHI",
  "MUGDHA",
  "NAVYA",
  "PAA",
  "SEJAL AKKA",
  "SIYAAA",
  "TIANA",
  "TWINKLE",
  "YASHAVI AKKA",
];

function PeopleList({ onSelectPerson }) {
  return (
    <div className="people-list">
      <h2>Select Your Name</h2>
      <div className="people-container">
        {people.map((person, index) => (
          <button key={index} onClick={() => onSelectPerson(person)}>
            {person}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PeopleList;
