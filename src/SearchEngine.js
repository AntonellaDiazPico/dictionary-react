import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import Outcome from "./Outcome";

export default function SearchEngine() {
  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState(null);
  const [outcome, setOutcome] = useState(null);

  function handleResponse(response) {
    // console.log(response.data[0]);
    setOutcome(response.data[0]);
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${query}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleQuery(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }

  if (ready) {
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleQuery} className="searchForm" />
        </form>
        <Outcome outcome={outcome} />
      </div>
    );
  } else {
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleQuery} className="searchForm" />
        </form>
      </div>
    );
  }
}
