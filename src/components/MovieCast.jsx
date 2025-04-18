import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCredits } from "../api/TmdbApp";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={s.castList}>
      {cast.map(actor => (
        <li key={actor.id} className={s.castItem}>
          {actor.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              width="100"
              className={s.actImg}
            />
          )}
           <p className={s.actInfo}>{actor.name} as {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;