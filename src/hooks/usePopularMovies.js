import {useQuery} from "@tanstack/react-query";
import api from "../utils/api"

const fetchPopularMovies= () => {
    return api.get(`/movie/popular`)
}

export const usePopularMoviesQuery= () => { // custom hook을 만드는 이유는 나중에 가져다 쓰기 편하다.
    return useQuery({
        queryKey:['movie-popular'],
        quertFn:fetchPopularMovies,
        select:(result) => result.data
    })
}