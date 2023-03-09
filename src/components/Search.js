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
        <div className='search'>
            <input type="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
        <div className="back-link">
        {searchClicked && <strong><p>Search result for {query}</p></strong>}
        </div>
        </>
    );
}
export default Search;
