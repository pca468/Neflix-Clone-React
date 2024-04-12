import React from "react";
import { useTopRatedMoviesQuery } from "../../../../../hooks/useTopRatedMovie";
import { Alert } from "bootstrap";
import MovieSlider from "../../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../../constants/responsive";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  console.log("왜 데이터가 안오지?", data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title="Top Rated Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovieSlide;
