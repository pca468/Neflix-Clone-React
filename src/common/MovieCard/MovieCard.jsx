import React from "react";
import { Badge } from "react-bootstrap"
import './MovieCard.style.css'

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger">{id}</Badge>
        ))}
      </div>
      <div>
        <div>{movie.vote_average}</div>
        <div>{movie.popularty}</div>
        <div>{movie.adult?'over18' : 'under 18'}</div>
      </div>
      
    </div>
  );
};

export default MovieCard;
