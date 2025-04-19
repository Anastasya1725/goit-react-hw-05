import { useParams, Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getMovieDetails } from '../api/TmdbApp';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkRef = useRef(location.state?.from || '/movies');

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBack = () => {
    navigate(backLinkRef.current);
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <button onClick={handleGoBack} className={styles.backButton}>Go back</button>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>

      <div className={styles.links}>
        <Link to="cast" state={{ from: backLinkRef.current }}>Cast</Link>
        <Link to="reviews" state={{ from: backLinkRef.current }}>Reviews</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;


