import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsToDisplay = directors.map((director) => {
    return (
      <div key={director.name}>
        {director.name}
        <ul key={director.name}>
          {director.movies.map((movie, index) => {
            return (
              <li key={index}>{movie}</li>
            )
          })}
        </ul>
      </div>
    )
  })
  
  return (
  <div>
    <h1>Directors Page</h1>
    {directorsToDisplay}
  </div>
)}

export default Directors;
