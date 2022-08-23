import React from 'react'
import TrailCard from './TrailCard'

function Trails( {render}) {
  return (
    <div>
        {render.map((trail) => {
            return (
                <TrailCard trail={trail} key={trail.id}/>
            )
        })}
    </div>
  )
}

export default Trails