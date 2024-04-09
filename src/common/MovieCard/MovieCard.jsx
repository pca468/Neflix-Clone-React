import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => { // data : => : 은 내가 : 다음 이름으로 다시 재정의 하겠다 라는 뜻
const { data:genreData } = useMovieGenreQuery()

const showGenre=(genreIdList)=>{
  if(!genreData) return []
  const genreNameList = genreIdList.map((id) => {
   const genreObj = genreData.find((genre)=>genre.id === id)
   return genreObj.name;
  })

  return genreNameList
}

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
      <div className="overlay p-2">
        <h1>{movie.title}</h1>
        {showGenre(movie.genre_ids).map((genre, index) => (
          <Badge bg="danger" key={index} className="me-1">
            {genre}
          </Badge>
        ))}
      </div>
      <div>
        <div>{movie.vote_average}</div>
        <div>{movie.popularty}</div>
        <div>{movie.adult ? "over18" : "under 18"}</div>
      </div>
    </div>
  );
};

export default MovieCard;
