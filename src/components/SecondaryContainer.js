import MovieList from "./MovieList"
import { UseSelector, useSelector } from "react-redux"

const Secondarycontainer = ()=>{
    const movies = useSelector(store=>store.movies)
    return(<div className="-mt-10 relative z-20 ">
    <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Trending"} movies={movies.trendingMovies}/>
    <MovieList title={"Popular"} movies={movies.popularMovies}/>
    <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies}/>
    </div>)
}

export default Secondarycontainer