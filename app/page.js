'use client'
import { useState } from "react";

function MovieCard({ movie }) {
  return (
    <div className="flex min-w-80 max-h-[500px] flex-col items-center justify-center border-zinc-200 border-2 shadow-2xl rounded-lg m-3 p-3 backdrop-blur-md">
      <img
        src={movie.Poster != "N/A" ? movie.Poster : "{ SearchIcon }"}
        alt="poster"
        className="max-w-fit max-h-[300px]"
      />
      <span>{movie.Type.toUpperCase()}</span>
      <h3 className="text-xl">{movie.Title} ({movie.Year})</h3>
    </div>
  );
}

export default function App() {
  const [movies, setMovies] = useState([]);
  const [apikey, setapikey] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const API_URL = "https://www.omdbapi.com/?apikey=" + apikey;
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  // useEffect(() => {
  //   searchMovies("Dune");
  // }, []);

  return (
    <div
      id="MainPage"
      className="flex flex-col items-center justify-start w-screen min-h-svh gap-5 p-5"
    >
      <div
        id="TopSection"
        className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full"
      >
        <h1 id="AppTitle" className="flex font-extrabold text-3xl ml-2">
          Sensible Movies
        </h1>

        <div
          id="InputWrapper"
          className="flex flex-col lg:flex-row items-center justify-center gap-4 mr-2"
        >
          <div className="flex flex-row gap-2">
            <input
              id="APIInput"
              className=" border-2 p-4 bg-zinc-100 rounded-full focus:shadow-2xl"
              type="text"
              placeholder="Enter API key"
              value={apikey}
              onChange={(e) => setapikey(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  console.log("Enter key pressed");
                }
              }}
            />
            <button
              id="SearchButton"
              className="border-2 rounded-full h-14 w-14 p-2 flex items-center justify-center"
              onClick={() => searchMovies(searchTerm)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-check"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
          </div>

          <div className="flex flex-row gap-2">
            <input
              id="SearchInput"
              className="border-2 p-4 bg-zinc-100 rounded-full h-14 focus:shadow-2xl"
              type="text"
              placeholder="Search for movies (click search icon)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              id="SearchButton"
              className="border-2 rounded-full h-14 w-14 p-2 flex items-center justify-center"
              onClick={() => searchMovies(searchTerm)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
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