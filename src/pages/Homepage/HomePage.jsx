import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/Banner/TopRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMoviesQuery from './components/Banner/UpcomingMovieSlide/UpcomingMovieSlide'


// 1. 배너 만들기 => popular movie 영화를 들고와서 첫번째 아이템을 보여주자
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMoviesQuery />
    </div>
  )
}

export default HomePage
