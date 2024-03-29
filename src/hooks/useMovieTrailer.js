import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import {addTrailerVideo} from '../utils/moviesSlice'
import { useDispatch} from "react-redux";
import { useSelector } from "react-redux";

const useMovieTrailer=(movieId)=>{
  const trailerVideo = useSelector(store=>store.movies.trailerVideo)
    const dispatch = useDispatch()
    const getMovieVideo = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        console.log(json);
        const filterData = json.results.filter((video) => video.type === "Trailer");
        console.log(filterData);
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        !trailerVideo && getMovieVideo();
      }, []);

}

export default useMovieTrailer