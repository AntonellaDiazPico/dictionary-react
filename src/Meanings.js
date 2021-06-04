import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  // console.log(props.meanings);
  return (
    <div className="Meanings">
      <h4 className="text-capitalize">{props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <div className="definition">
            {definitions.definition}
            </div>
            <div className="example">
            {definitions.example}
            </div>
            <Synonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
