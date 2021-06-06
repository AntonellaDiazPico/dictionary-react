import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import Outcome from "./Outcome";
import Photos from "./Photos";
import Loader from "react-loader-spinner";

export default function SearchEngine(props) {
  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState(props.defaultQuery);
  const [outcome, setOutcome] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleDictionaryResponse(response) {
    console.log(response);
    setOutcome(response.data[0]);
    setReady(true);

    let pexelsApiKey =
      "563492ad6f917000010000017b0b7ce363ae4a3984761e6e79a6210a";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=6`;
    axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${query}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    search();
    return (
    <div className="loader">
        <Loader
          type="ThreeDots"
          color="#e39ba7"
          height={100}
          width={100}
        />
      </div>
    );
  }
}
