import React from "react";
import Meanings from "./Meanings";

export default function Outcome(props) {
  // console.log(props.outcome);
  return (
    <div className="Outcome">
      <h2>{props.outcome.word}</h2>
      {props.outcome.meanings.map(function (meanings, index) {
        return (
          <div key={index}>
            <Meanings meanings={meanings} />
          </div>
        );
      })}
    </div>
  );
}
