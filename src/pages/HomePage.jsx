import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/TmdbApp";
import MovieList from "../components/MovieList";
import s from './HomePage.module.css';


const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);

  }, []);

  return (
    <div>
        <h1 className={s.title}>Trending Movies</h1>
        <MovieList movies={movies} className={s.movieList}/>
    </div>
  )
}

export default HomePage;