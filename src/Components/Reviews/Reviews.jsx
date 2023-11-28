import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetMovieReviews from "../api/GetMovieReviews";

export default function Reviews() {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const data = await GetMovieReviews(movieId);
      const { results } = data;

      const reviewInfo = results.map(({ id, author, content }) => ({
        id,
        author: author,
        content: content,
      }));

      setMovieReview(reviewInfo);
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {movieReview.length === 0 ? (
        "No reviews"
      ) : (
        <ul>
          {movieReview.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>Content: {content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
