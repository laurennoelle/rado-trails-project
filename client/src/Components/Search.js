import React from 'react'

function Search( {search, searchForTrails} ) {
  return (
    <div className='searchbar'>
        <label htmlfor="search">Search for trails:</label>
        <input
            type="text"
            id="search"
            placeholder='Start exploring...'
            onChange={(e) => searchForTrails(e)}
            value={search} />
    </div>
  );
}

export default Search;