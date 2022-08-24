import React from 'react';
import TrailCard from './TrailCard';

function TrailList( {searchedTrails} ) {
  return (
    <ul className='cards'>{searchedTrails.map((trail) => <TrailCard key={trail.id} trail={trail} />)}</ul>

  );
}

export default TrailList;