import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
  console.log(props.movies)
  return (
    <div>
      {props.movies.map((movie, i) => {
        return (
          <Movie key={i} image={movie.Poster} movie={movie} />
        )
      }
      )}
    </div>
  )
}

export default MovieList;
