import React from "react";
import { useUpcomingMoviesQuery } from "../../../../../hooks/useUpcomingMovie";
import { Alert } from "bootstrap";
import MovieSlider from "../../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../../constants/responsive";

const UpcomingMoviesQuery = () => {
  const { data, isLodaing, isError, error } = useUpcomingMoviesQuery();
 
  if (isLodaing) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title="Upcoming Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMoviesQuery;
