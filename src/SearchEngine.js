import axios from "axios";
import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [query, setQuery] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
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
  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleQuery} className="searchForm" />
      </form>
    </div>
  );
}
