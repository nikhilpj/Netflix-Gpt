import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./MainContainer";
import Secondarycontainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <>
      <Header />

      <Maincontainer />
      <Secondarycontainer />

      {/* 
    Maincontainer
        -videoBackground
        -videoTitle
    Secondarycontainer
        -Movielist * n
        -Cards * n
    */}
    </>
  );
};
export default Browse;
