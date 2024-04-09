import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import AppLayout from './layout/AppLayout';
import HomePage from './pages/Homepage/HomePage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundpage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';



// 홈페이지  경로 '/'
// 영화 전체 보여주는 페이지(서치) /movies?q= 
// 영화 디테일 페이지  /movies/:id
// 추천영화 / movies/:id/recommandation
// 리뷰 /movie/:id/reviews

function App() {
  return ( // AppLayout으로 Route를 묶어줘야 같은 Layout을 보여줄 수 있다.
  // index는 위에 부모 path와 동일하게 사용하겠다 라는 뜻
    <div className="App">
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element = {<HomePage />}/>
          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>
        </Route>
          {/* <Route path='/movies' element={<MoviePage />}/> 위처럼 subRoute 구성으로 바꿔줄 수 있다.
          <Route  path='/movies/:id' element={<MovieDetailPage />}/> */}

          {/* *=> 이외의 페이지 경로 설정 */}
        <Route path='*' element={<NotFoundPage />}/> 
      </Routes>
 
    </div>
  );
}


export default App;
