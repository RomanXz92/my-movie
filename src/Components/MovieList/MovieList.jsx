import React from "react";
import GetTrending from "../api/GetTrending";
import { Link } from "react-router-dom";

export default function MovieList() {
  const trendMovies = GetTrending();

  return (
    <>
      <ul>
        {trendMovies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
          >
            <li>{movie.title ? movie.title : "no title"}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
