export default async function GetMovieDetails(movieId) {
  const KEY = "e37afbe8681f4152ae6f2e33bec3a5b8";
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`;
  const response = await fetch(URL);
  const data = await response.json();

  return data;
}
