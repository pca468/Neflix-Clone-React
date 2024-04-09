import React from "react";
import { useUpcomingMoviesQuery } from "../../../../../hooks/useUpcomingMovie";
import { Alert } from "bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../../MovieCard/MovieCard";



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    //slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    //slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    //slidesToSlide: 1 // optional, default to 1.
  },
};
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
      <h3>Upcoming Movies</h3>
      <Carousel
        infinite={true} // 무한반복할거냐?
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive} // 몇개의 아이템을 보여줄지 설정가능
      >
        {data?.results.map((movie, index) => ( // alt + shift + f => 코드 정리 키워드 
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default UpcomingMoviesQuery;
