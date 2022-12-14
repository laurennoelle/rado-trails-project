import React, { useState, useEffect} from 'react'
import TrailList from './TrailList'
import Search from './Search'

const API = ("http://localhost:3000/trails")

function Trails() {
    const [trails, setTrails] = useState([])
    const [search, setSearch] = useState("")

    function searchForTrails(e) {
        setSearch(e.target.value)
    }

    useEffect(() => {
        fetch(API)
        .then(res => res.json())
        .then(setTrails)
    }, [])

    const searchedTrails = trails.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()) || t.city.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
       <Search search={search} searchForTrails={searchForTrails} />
       <TrailList trails={trails} searchedTrails={searchedTrails} />
    </main>
  )
}

export default Trails