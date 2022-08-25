import React, {useState} from "react";

function NewTrailForm( {addNewTrail} ) {

  const [trailName, setTrailName] = useState("")
  const [image, setImage] = useState("")
  const [city, setCity] = useState("")
  const [length, setLength] = useState("")
  const [estTime, setEstTime] = useState("")
  const [map, setMap] = useState("")
  const [likes, setLikes] = useState("")

  function handleName(event) {
    setTrailName(event.target.value)
  }

  function handleImage(event) {
    setImage(event.target.value)
  }

  function handleCity(event) {
    setCity(event.target.value)
  }

  function handleLength(event) {
    setLength(event.target.value)
  }

  function handleEstTime(event) {
    setEstTime(event.target.value)
  }

  function handleMap(event) {
    setMap(event.target.value)
  }

  function handleLikes(event) {
    setLikes(event.target.value)
  }

  const formData = {
    "Name": trailName,
    "Image url": image,
    "City": city,
    "Length": length,
    "Estimated Time": estTime,
    "Map Link": map,
    "Likes": likes,
  }

  function handleSubmit(event) {
    event.preventDefault()
  
    fetch("http://localhost:3000/trails", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newItem => addNewTrail(newItem));
  }


  return (
    <div className="new-trail-form">
      <h2>Create a New Trail</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Trail name" onChange={handleName}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleImage}/>
        <input type="text" name="city" placeholder="City name" onChange={handleCity}/>
        <input type="number" name="length" step="0.01" placeholder="length" onChange={handleLength}/>
        <input type="number" name="Est. Time" step="0.01" placeholder="est.time" onChange={handleEstTime}/>
        <input type="text" name="map" placeholder="Map Link" onChange={handleMap}/>
        <input type="number" name="likes" step="0" placeholder="likes" onChange={handleLikes}/>
        <button type="submit">Add You Trail</button>
      </form>
    </div>
  );
}

export default NewTrailForm;