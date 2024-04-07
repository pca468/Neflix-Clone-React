import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import "./Banner.css";

const Banner = () => {

   const {data, isLoading, isError, error} = usePopularMoviesQuery()
   console.log("ddd", data)
   if(isLoading){
    <h1>Loding...</h1>
   }
   if(isError){
    <Alert variant='danger'>{error.message}</Alert>
   }
  return (
    <div style={{
        backgroundImage:"url("+
        `https://media.themoviedb.org/t/p/w300_and_h450_multi_faces_filter(blur)${data?.result[0].poster_path}`+")"
    }}
    className='banner'
    >
      <div className='text-white banner-text-area' /* 부트스트랩에서 기본적으로 제공하는 코드 */> 
        <h1>{data?.result[0].title}</h1>
        <p>{data?.result[0].overview}</p>
      </div>
    </div>
  )
}

export default Banner
