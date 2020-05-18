import React from 'react'



const MovieCard=({movie})=>{
    return(
        <div className='movieCard'>
            <cite className='movieTitle'>{movie.title}</cite>
            <img src={movie.poster} alt={movie.title} className='poster'/>
            <span className='MovieDate'>Date:{movie.date}</span>
            <span className='movieRate'>Rate:{movie.rate}</span>

        </div>
    )
}

export default MovieCard