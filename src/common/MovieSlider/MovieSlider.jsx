import React from 'react'
import "./MovieSlider.style.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';




const MovieSlider = ({title,movies,responsive}) => {
  return (
    <div>
      <h3>{title}</h3>
      <Carousel
        infinite={true} // 무한반복할거냐?
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive} // 몇개의 아이템을 보여줄지 설정가능
      >
        {movies.map((movie, index) => ( // alt + shift + f => 코드 정리 키워드 
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  )
}

export default MovieSlider
