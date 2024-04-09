import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTopRatedMovies=()=>{
    return api.get(`/movie/top_rated`)
}

export const useTopRatedMoviesQuery=()=>{ // custom hook을 따로 만드는 이유 => 나중에 hook을 그대로 활용하기 위함 
    return useQuery({
        queryKey:['movie-top-rated'],
        queryFn:fetchTopRatedMovies,
        select:(result) => result.data,
    });
};