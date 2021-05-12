import React, { useState } from "react";
import "./SearchEngine.css"

export default function SearchEngine() {
    const [query, setQuery] = useState(null);



    function handleSubmit(event) {
        event.preventDefault();
        alert(`searching ${query}`);
    }

    function handleQuery(event) {
        event.preventDefault();
        setQuery(event.target.value);

    }
    return (
        <div className="SearchEngine">
            <form  onSubmit={handleSubmit}>
                <input type="search" onChange={handleQuery} className="searchForm"/>
            </form>
        </div>
    );
}