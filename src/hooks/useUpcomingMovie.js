import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcomingMovies=()=>{
    return api.get(`/movie/upcoming`)
}

export const useUpcomingMoviesQuery=()=>{ // custom hook을 따로 만드는 이유 => 나중에 hook을 그대로 활용하기 위함 
    return useQuery({
        queryKey:['movie-upcoming'],
        queryFn:fetchUpcomingMovies,
        select:(result) => result.data,
    });
};