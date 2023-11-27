import React, { useEffect, useState } from "react";

const KEY = "e37afbe8681f4152ae6f2e33bec3a5b8";
const URL = "https://api.themoviedb.org/3/trending/all/day";

export default function GetTrending() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${URL}?api_key=${KEY}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies", error);
      }
    };

    fetchMovies();
  }, []);

  return movies;
}
