import Header from "./Header"
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Maincontainer from "./MainContainer"
import Secondarycontainer from "./SecondaryContainer"

const Browse=()=>{
 
    useNowPlayingMovies()
    return (<>
    <Header/>
    <Maincontainer/>
    <Secondarycontainer/>
    {/* 
    Maincontainer
        -videoBackground
        -videoTitle
    Secondarycontainer
        -Movielist * n
        -Cards * n
    */}
    
    </>)
}
export default Browse