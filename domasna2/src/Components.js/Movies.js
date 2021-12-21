import React from 'react';
import {App} from './Controlers/App'


             
export const Movies = ({listOfMovies}) =>{
  console.log(listOfMovies)
  return(
      <div id='movies'>
      <h2>Movie List</h2>
      {listOfMovies.map((movie,i) =>{
          return(
              <div key={i}>
                  <p><span>Movie Title: </span>{movie.title}</p>
                  <p><span>Release Date:</span>{movie.releaseDate}</p> 
                  <p><span>Genre:</span>{movie.genre}</p> 
                  <p><span>Plot:</span>{movie.plot}</p>
                  <a target='_blank' href={movie.imdbLink}>whach the movie</a>
                 <br/>
                  <a target='_blank' href={movie.imdbLink}>
                      <img width={"130"} height={"230"} src={movie.imgUrl} alt={movie.name}/>
                      </a>
              </div>
             
          )
      })}
      </div>
  )
}
