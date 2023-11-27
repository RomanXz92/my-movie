import React from "react";
import MovieList from "../MovieList/MovieList";

export default function HomeList() {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <h2>Trending movies:</h2>
        </li>
        <li>
          <MovieList />
        </li>
      </ul>
    </>
  );
}
