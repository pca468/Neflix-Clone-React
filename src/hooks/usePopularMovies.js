import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies=()=>{
    return api.get(`/movie/popular`)
}

export const usePopularMoviesQuery=()=>{ // custom hook을 따로 만드는 이유 => 나중에 hook을 그대로 활용하기 위함 
    return useQuery({
        queryKey:['movie-popular'],
        queryFn:fetchPopularMovies,
        select:(result) => result.data,
    });
};