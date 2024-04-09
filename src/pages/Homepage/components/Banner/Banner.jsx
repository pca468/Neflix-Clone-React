import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import "./Banner.style.css";

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
    <div style={{ // " "+`` +" " 이런식으로 분리해주는 이유 => 기본적으로 String 타입으로 받기 때문
      backgroundImage:"url("+`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}`
      +")",
    }}
    className='banner'
    > {/* ? => results가 있어? 있으면 보여줘! 코드*/}
      <div className='text-white banner-text-area'>
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  )
}

export default Banner
