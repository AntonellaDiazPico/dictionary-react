import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <h4 className="text-capitalize">{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            {definitions.definition}
            <br />
            <em>{definitions.example}</em>
            <Synonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
