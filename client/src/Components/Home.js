import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="splash">
    <div className="homeContainer">
        {/* <img className="store-name" src="https://i.imgur.com/yEvjfK4.png" alt="store-name"/> */}
        <section className="description">
            <h1>Welcome to Rado Trails!</h1>
            <p>A place to explore the trails in Colorado.</p>
            <p>All of our trails are reviewed by our global community of adventurers like you!</p><br></br>
            <NavLink to={`/trails`}>
            <button className='button btn button-primary'>Let's explore →</button> 
            </NavLink>
        </section>
    </div>
</div>
  )
}

export default Home