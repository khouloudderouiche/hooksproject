import React from 'react'
import MovieCard from './MovieCard'



const MovieList = ({MovieList}) => {
    return (
        <div> 
            list
            {MovieList.map(movie=><MovieCard  key={movie.id} movie={movie} />

            )
             
            }
        </div>
    )
}

export default MovieList

