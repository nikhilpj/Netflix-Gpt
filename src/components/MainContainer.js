import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"


const Maincontainer = ()=>{
    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies===null)
    return
    const mainMovie = movies[0]
    const {original_title,overview ,id  } = mainMovie
    console.log(mainMovie)
    return(<>
    <VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movieId={id}/></>)
}

export default Maincontainer