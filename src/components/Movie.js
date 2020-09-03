import React from 'react'

const Movie = (props) => {
  // console.log(props)
  return (
    <div>
      <img src={props.image} alt="movie"></img>
      <h5>{props.movie.Title} ({props.movie.Year})</h5>
      <button>Nominate</button>
    </div>
  )
}

export default Movie;
