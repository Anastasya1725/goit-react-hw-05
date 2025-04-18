import { useState } from "react";
import { searchMovies } from "../api/TmdbApp";
import MovieList from "../components/MovieList";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
    const [query,setquery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!query.trim()) return;
        const results = await searchMovies(query);
        setMovies(results);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={s.searchForm}>
              <input  type="text" value={query} placeholder="Search movies..." onChange={(e) => setquery(e.target.value)} className={s.searchInput}/>
            <button type="submit" className={s.searchButton}>Search</button>
            </form>
            <MovieList movies={movies}/>
        </div>
    )
}

export default MoviesPage;
