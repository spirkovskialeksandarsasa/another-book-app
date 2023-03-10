import React, { useState } from "react";
import './Search.css';
import './DataComponent.css';
import '../App.css';



function Search({ onSearch }) {
    const [query, setQuery] = useState('');
    const [searchClicked, setSearchClicked] = useState(false);

    const handleSearch = () => {
        onSearch(query);
        setSearchClicked(true);
    }

    return (
        <>
            <div className="search">
                <input className="search__input" type="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className="search__button" onClick={handleSearch}>Search</button>
            </div>
            <div className="result">
                {searchClicked && query !== "" && <p className="result__text">Search result for <strong>{query}</strong></p>}
            </div>
        </>
    );
}
export default Search;
