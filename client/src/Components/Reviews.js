import React from 'react'

function Reviews() {
  return (
    <div className="new-plant-form">
    <h2>Create a New Review</h2>
    <form >
      <input type="text" name="name" placeholder="Trail name"/>
      <input type="text" name="image" placeholder="Comment"/>
      <input type="number" name="price" step="0.01" placeholder="Rating" />
      <button type="submit">Add Review</button>
    </form>
  </div>
  )
}

export default Reviews