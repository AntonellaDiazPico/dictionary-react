import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import Outcome from "./Outcome";

export default function SearchEngine(props) {
  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState(props.defaultQuery);
  const [outcome, setOutcome] = useState(null);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${query}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setOutcome(response.data[0]);
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleQuery(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }

  if (ready) {
    return (

        <div className="SearchEngine">
          <section className="main-section">
            <h6>What word do you want to look up?</h6>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleQuery}
              className="searchForm"
              placeholder={props.defaultQuery}
            />
          </form>
          </section>
          <Outcome outcome={outcome} />
        </div>

    );
  } else {
    search();
    return "loading";
  }
}
