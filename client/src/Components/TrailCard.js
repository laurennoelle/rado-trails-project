import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'

function TrailCard( {trail} ) {
  const [likeCount, setLikeCount] = useState(trail.likes ? trail.likes : 0)

  function handleAddLike() {
    fetch(`http://localhost:3000/trails/${trail.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likeCount + 1
      }),
    })
    .then((res) => res.json())
    .then(trail => {
      console.log(trail)
      setLikeCount(trail.likes)})
  }

  return (
    <li className="card">
        <img src={trail.img_url} alt={trail.name} />
        <h3>{trail.name}</h3>  
       
    
        <h4>{trail.city}, CO</h4>
        <p><em>Length: {trail.length} mi.</em></p>
        <p><em>Estimated Time: {trail.est_time} hrs.</em></p>
        <a 
        className="map-icon"
        href={trail.map}
        target="_blank"
        >
          <ion-icon name="navigate-circle-outline"></ion-icon>
        </a>
        <Button size="small" onClick={handleAddLike}> ⭐️ {likeCount}</Button>
        <NavLink to={`/reviews`} style={{ textDecoration: 'none'}}>
            <Button className='add-review-button'
            color='primary'
            variant="outlined"
            size=''
            
            >Add a Review</Button> 
            </NavLink>
        {/* <button>⭐️</button> */}
        {/* <p> Reviews: {trail.reviews}</p> */}
    </li>
  );
}

export default TrailCard