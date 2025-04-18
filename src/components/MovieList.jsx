import { Link, useLocation } from "react-router-dom";
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

 return (
 <ul className={s.movieList}>
 {movies.map((movie) => (
 <li key={movie.id} className={s.movieItem}>
 <Link
 to={`/movies/${movie.id}`}
state={{ from: location }}
 className={s.movieLink} // Додаємо клас для стилізації посилання
 >
 {movie.title}
 </Link>
 </li>
 ))}
 </ul>
 );
};

export default MovieList;
