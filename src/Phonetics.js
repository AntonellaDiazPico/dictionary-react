import React from "react";
import "./Phonetics.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      {props.phonetics.map(function (phonetic, index) {
        return (
            <div key={index}>
                <a href={phonetic.audio} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faPlay} />
                </a>
                {phonetic.text}
            </div>

        );
      })}
    </div>
  );
}
