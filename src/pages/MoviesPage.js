import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetSearchMovie from "../Components/api/GetSearchMovie";
import Movies from "../Components/Movies/Movies";

export default function MoviesPage() {
  const [searchMovie, setSearchMovie] = useState("");
  const [searchMovieList, setSearchMovieList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchMovie === "") {
      setSearchMovieList([]);
    }
  }, [searchMovie]);

  const handleChange = (e) => {
    setSearchMovie(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    queryParams.set("query", searchMovie);
    navigate(`/movies?${queryParams.toString()}`);
    searchMoviesByKeyword(searchMovie);

    reset();
  };

  const searchMoviesByKeyword = async (keyword) => {
    try {
      const data = await GetSearchMovie(keyword);
      const { results } = data;
      setSearchMovieList(results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const reset = () => {
    setSearchMovie("");
  };

  return (
    <>
      <Movies
        searchMovieList={searchMovieList}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchMovie={searchMovie}
      />
    </>
  );
}
