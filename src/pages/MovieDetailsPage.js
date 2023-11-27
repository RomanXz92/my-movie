import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import MovieDetails from "../Components/MovieDetails/MovieDetails";
import GetMovieDetails from "../Components/api/GetMovieDetails";

export default function MovieDetailsPage() {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await GetMovieDetails(movieId);
      const {
        original_title,
        overview,
        release_date,
        vote_average,
        poster_path,
      } = data;

      const movieInformation = {
        title: original_title,
        posterPath: poster_path,
        overview: overview,
        releaseDate: release_date,
        voteAverage: vote_average,
      };
      setMovieInfo(movieInformation);
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {movieInfo && (
        <MovieDetails
          movieInfo={movieInfo}
          handleGoBack={handleGoBack}
        />
      )}

      <Outlet />
    </>
  );
}
