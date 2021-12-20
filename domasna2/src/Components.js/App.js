import React from 'react';
import {Movies} from './Movies';

const  App=() => {

    const movies = [

        {id: 1,  
            title: 'Eternal Sunshine of the Spotless Mind',
            genre: 'Drama, Romance, Sci-Fi',
            releaseDate: "19 Mar 2004",
            plot: 'When their relationship turns sour, a young couple undergoes a medical procedure to have each other erased from their memories.',
            imdbLink: 'https://www.imdb.com/video/vi2292515097?playlistId=tt0338013' ,
            imgUrl: 'https://www.imdb.com/title/tt0338013/mediaviewer/rm2262600449/' ,
            },
    
    {  id: 2,
    title: "Don't Look Up",
    genre: 'Drama, Romance, Sci-Fi',
    releaseDate: '8 December 2021',
    plot: 'Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.',
    imdbLink: 'https://www.imdb.com/video/vi15057689?playlistId=tt11286314' ,
    imgUrl: 'https://www.imdb.com/title/tt11286314/mediaviewer/rm1895491841/?ref_=ext_shr_lnk'
    },
    
    {
    id:3,
    title: 'Fight Club',
    genre: 'Drama',
    releaseDate: '10 September 1999',
    plot: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    imdbLink: 'https://www.imdb.com/video/vi781228825?playlistId=tt0137523' ,
    imgUrl: 'https://www.imdb.com/title/tt0137523/mediaviewer/rm301108480/'
    
    },
    
    {
    id:4,
    title: 'Bruised',
    genre : 'Drama, Sport',
    releaseDate: '12 September 2020',
    plot: 'A disgraced MMA fighter finds redemption in the cage and the courage to face her demons when the son she had given up as an infant unexpectedly reenters her life.',
    imdbLink: 'https://www.imdb.com/video/vi1100989209?playlistId=tt8310474' ,
    imgUrl: 'https://www.imdb.com/title/tt8310474/mediaviewer/rm1825764353/?ref_=ext_shr_lnk'
    },
    
    {
    id: 5,
    title: 'Ghostbusters: Afterlife',
    genre: 'Adventure, Comedy, Fantasy',
    releaseDate: '14 October 2021',
    plot: 'When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.',
    imdbLink: 'https://www.imdb.com/video/vi637322009?playlistId=tt4513678' ,
    imgUrl: 'https://www.imdb.com/title/tt4513678/mediaviewer/rm3367430401/'
    }
    
      ]

      return(
        <div id='App'>
            <h2>Movies API</h2>
            <Movies listOfMovies={movies}/>
        </div>

    )

    }
  
 
    export {App}