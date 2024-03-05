import { useEffect, useState } from "react";
import "./index.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// const apikey = "e9cb394"

// const movie1 = {
//   Title: "Dune",
//   Year: "2021",
//   imdbID: "tt1160419",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
// };
export default function App() {
  const [movies, setMovies] = useState([]);
  const [apikey, setapikey] = useState("")
  const [searchTerm, setSearchTerm] = useState("");
  
  const API_KEY = "https://www.omdbapi.com/?apikey=" + apikey;
  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  // useEffect(() => {
  //   searchMovies("Dune");
  // }, []);

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-svh m-5">
      <h1 className="flex font-extrabold text-3xl">Sensible Movies</h1>
      <input
          className="border-2 p-4 bg-sky-100 rounded-full"
          type="text"
          placeholder="Enter apikey"
          value={apikey}
           onChange={(e) => setapikey(e.target.value)}
        />
      <div className="flex w-screen items-center gap-2 justify-center">
        <input
          className="border-2 p-4 bg-sky-100 rounded-full"
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-0 mt-4">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <h1>no movies found</h1>
        )}
      </div>
    </div>
  );
}
