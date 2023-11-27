import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Cast from "./Components/Cast/Cast";
import Reviews from "./Components/Reviews/Reviews";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="movies"
            element={<MoviesPage />}
          />
          <Route
            path="movies/:movieId"
            element={<MovieDetailsPage />}
          >
            <Route
              path="cast"
              element={<Cast />}
            />
            <Route
              path="reviews"
              element={<Reviews />}
            />
          </Route>
          <Route
            path="*"
            element={<h1 style={{ textAlign: "center" }}>Page not found</h1>}
          />
        </Route>
      </Routes>
    </>
  );
}
