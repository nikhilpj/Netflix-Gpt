import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { useSelector } from "react-redux"

const useUpcomingMovies=()=>{
    const dispatch = useDispatch()
    const upComingVideos = useSelector(store=>store.movies.upComingMovies)
    const getUpcomingMovies=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
        const json = await data.json()
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
       !upComingVideos && getUpcomingMovies()
    },[])

}

export default useUpcomingMovies