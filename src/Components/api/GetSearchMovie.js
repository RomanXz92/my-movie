export default async function GetSearchMovie(keyword) {
  const key = "e37afbe8681f4152ae6f2e33bec3a5b8";
  const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${key}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
