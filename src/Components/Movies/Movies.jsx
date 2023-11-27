import React from "react";
import { Link } from "react-router-dom";

export default function Movies({
  searchMovieList,
  handleChange,
  handleSubmit,
  searchMovie,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Search movie:{" "}
          <input
            onChange={handleChange}
            value={searchMovie}
            type="text"
            name="name"
            required
          />
        </label>{" "}
        <button>search</button>
      </form>
      {searchMovieList.length === 0 ? (
        <h2>No any movie</h2>
      ) : (
        searchMovieList.map(({ id, title }) => (
          <Link
            key={id}
            to={`/movies/${id}`}
          >
            <li>{title ? title : "No title"}</li>
          </Link>
        ))
      )}
    </>
  );
}
