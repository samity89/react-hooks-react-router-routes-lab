import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesToDisplay = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <br/>
        <p>{movie.time} minutes</p>
        <ul key={movie.title}>
          {movie.genres.map((genre) => {
            return (
              <li key={genre}>{genre}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  
  return ( 
  <div>
    <h1>Movies Page</h1>
    {moviesToDisplay}
  </div>
)}

export default Movies;
