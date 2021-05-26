import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      {props.phonetics.map(function (phonetic, index) {
        return (
            <div key={index}>
                <a href={phonetic.audio} target="_blank" rel="noreferrer">
                    Listen Symbol here
                </a>
                <br />
                {phonetic.text}
            </div>

        );
      })}
    </div>
  );
}
