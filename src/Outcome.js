import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Outcome.css";

export default function Outcome(props) {
  
  return (
    <div className="Outcome">
      <section className="main-section">
      <h2>{props.outcome.word}</h2>
      <Phonetics phonetics={props.outcome.phonetics} />
      </section>
      {props.outcome.meanings.map(function (meanings, index) {
        return (
            <section className="main-section" key={index}>
          <div>
            <Meanings meanings={meanings} />
          </div>
      </section>
        );
      })}
    </div>
  );
    } 