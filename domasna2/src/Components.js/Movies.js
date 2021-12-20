import React from 'react';
import {App} from './App';



const Movies = ({listOfMovies}) => {
    
    return(
        <div id='Movies'>
             {lMovies.map((movie,i) => {
             return(
                 <div key={i} className='col-sm-4'>
                    <div
                        key={i}
                        className='card'
                        style={
                          {margin:'18px',
                           width:'20rem',
                           border:'1px solid black'
                      }
                    }
                       >
                        <img
                         style={{ padding: '6px'}}
                         width={'80%'}
                     />
             
                        <h6 className="card-title">Title: {Movies.title}</h6>
                        <p className="card-text">Genre: {Movies.genre}</p>
                        <p className="card-text">ReleaseDate: {Movies.releaseDate}</p>
                        <p className="card-text">Plot: {Movies.plot}</p>
                        <p>ImdbLink: {Movies.imdbLink}</p>
                        <p>ImgUrl: {Movies.imgUrl}</p>
             
             
                        <a
                        href={movie.trailerLink} Watch the movie trailer>
                        </a>
                        </div> 
                        </div> 
             )
                  })}
                        </div>

                        
    )
                }
      

        export { Movies } ;