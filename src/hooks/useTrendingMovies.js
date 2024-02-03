import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingVideos = useSelector(store=>store.movies.trendingMovies)
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
   !trendingVideos && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
