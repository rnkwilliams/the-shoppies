import React from 'react'

const Movie = ({ movie }) => {
  // console.log(props)
  return (
    <div className='card'>
      <img src={movie.Poster} alt="movie"></img>
      <h5>{movie.Title} ({movie.Year})</h5>
      <button>Nominate</button>
    </div>
  )
}

export default Movie;
