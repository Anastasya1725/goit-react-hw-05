import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../api/TmdbApp";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const {movieId} = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() =>{
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if(reviews.length === 0 ) {
    return <p>No reviews found.</p>
  }

  return(
    <ul className={s.reviewsList}>
        {reviews.map(review => (
            <li key={review.id} className={s.reviewItem}>
            <h4 className={s.author}>Author: {review.author}</h4>

            <p className={s.content}>{review.content}</p>
            </li>
        ))}
    </ul>
  )
}

export default MovieReviews;