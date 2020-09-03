import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
  console.log(props.movies)
  return (
    <div className='cards'>
      {props.movies.map((movie, i) => (
        <Movie key={i} movie={movie} />
      )
      )}
    </div>
  )
}

export default MovieList;
