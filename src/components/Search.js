import React, { useState } from "react";
import './Search.css';
import './DataComponent.css';
import '../App.css';



function Search({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    }


    return (
        <div className='search'>
            <input type="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}
export default Search;
