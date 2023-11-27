import React from "react";
import { Link } from "react-router-dom";

export default function MovieDetails({ movieInfo, handleGoBack }) {
  const { title, posterPath, overview, voteAverage, releaseDate } = movieInfo;

  return (
    <div>
      <button
        onClick={handleGoBack}
        type="button"
      >
        / go back{" "}
      </button>
      <h2>Title: {title}</h2>
      <ul>
        <li>
          <img
            src={
              posterPath ? (
                `https://image.tmdb.org/t/p/w200/${posterPath}`
              ) : (
                <p>no poster</p>
              )
            }
            alt="poster"
          />
        </li>
        <li>
          <p>Overview: {overview}</p>
        </li>
        <li>
          <p>Release date: {releaseDate}</p>
        </li>
        <li>
          <p>Rating: {voteAverage}</p>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
}
