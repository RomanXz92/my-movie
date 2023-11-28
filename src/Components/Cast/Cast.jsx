import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetMovieCredits from "../api/GetMovieCredits";

export default function Cast() {
  const [actorsInfo, setActorsInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      const data = await GetMovieCredits(movieId);
      const { cast } = data;

      const actorsData = cast.map(({ name, profile_path }) => ({
        profilePath: profile_path,
        name: name,
      }));

      setActorsInfo(actorsData);
    };

    fetchMovieCredits();
  }, [movieId]);

  if (!actorsInfo) {
    return null;
  }

  // commit

  return (
    <>
      <ul>
        {actorsInfo.map(({ name, profilePath }) => (
          <li key={name}>
            <img
              src={
                profilePath
                  ? `https://image.tmdb.org/t/p/w200/${profilePath}`
                  : "no photo"
              }
              alt="name"
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
