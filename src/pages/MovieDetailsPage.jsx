import { useParams, Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../api/TmdbApp';
import s from './MovieDetailsPage.module.css';


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state?.from || '/movies');
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={s.detailsContainer}>
      <button onClick={handleGoBack} className={s.backButton}>Go back</button>

      <div className={s.detailsContainer}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className={s.poster} />
        <div className={s.info}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      </div>

      <div className={s.links}>
        <Link to="cast" state={location.state}>Cast</Link>
        <Link to="reviews" state={location.state}>Reviews</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
