import React from "react";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <h4 className="text-capitalize">{props.meanings.partOfSpeech}</h4>
        {props.meanings.definitions.map(function(definitions, index) {
            return(
                <div key={index}>
                    {definitions.definition}
                    <br />
                    <em>{definitions.example}</em>
                    </div>
            );
        })}
    </div>
  );
}
