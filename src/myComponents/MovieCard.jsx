import React from 'react';
import '../css/MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className='card'>
        <div className='poster'>
          <img src={movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"} alt={movie.Title}></img>
          <span>{movie.Title}</span>
        </div>
      </div>
    </>

  )
}

export default MovieCard;
