import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Outcome.css";

export default function Outcome(props) {
  // console.log(props.outcome);
  return (
    <div className="Outcome">
      <section className="main-section">
      <h2>{props.outcome.word}</h2>
      <Phonetics phonetics={props.outcome.phonetics} />
      </section>
      {props.outcome.meanings.map(function (meanings, index) {
        return (
            <section className="main-section">
          <div key={index}>
            <Meanings meanings={meanings} />
          </div>
      </section>
        );
      })}
    </div>
  );
}
