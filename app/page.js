"use client";
import { useState } from "react";
import Image from "next/image";

function MovieCard({ movie }) {
  return (
    <div className="flex min-w-80 max-h-[700px] flex-col items-center justify-center border-zinc-200 shadow-2xl border-2 rounded-lg m-3 py-3 pt-5 gap-2 backdrop-blur-md">
      <div className="w-[270px] h-[420px]">
        <img
          src={movie.Poster != "N/A" ? movie.Poster : "{ SearchIcon }"}
          alt="poster"
        />
      </div>

      <span>{movie.Type.toUpperCase()}</span>
      <h3 className="text-xl break-normal w-[300px] text-center">
        {movie.Title} ({movie.Year})
      </h3>
    </div>
  );
}

function Title() {
  return (
    <h1 id="AppTitle" className="flex font-extrabold text-3xl ml-2">
      SensibleMovies
    </h1>
  );
}



export default function App() {
  const [movieArray, setmovieArray] = useState([]);
  const [apiKey, setapiKey] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [valid, setvalid] = useState(false)
  const apiURL = "https://www.omdbapi.com/?apiKey=" + apiKey;
  const searchmovieArray = async (title) => {
    const response = await fetch(`${apiURL}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search)
    setmovieArray(data.Search);
  };

  return (
    <div
      id="MainPage"
      className="flex flex-col items-center justify-start w-screen min-h-svh gap-5 p-5"
    >
      <div
        id="TopSection"
        className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full"
      >
        <Title />

        <div id="InputWrapper"
          className="flex flex-col lg:flex-row items-center justify-center gap-4 mr-2"
        >
          <div className="flex flex-row gap-2">
            <input
              id="APIInput"
              className="border-2 p-4 bg-zinc-100 rounded-full focus:shadow-2xl"
              type="text"
              placeholder="Enter API key"
              value={apiKey}
              onChange={(e) => setapiKey(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  console.log("Enter key pressed");
                }
              }}
            />
            <button
              id="SearchButton"
              className="border-2 rounded-full h-14 w-14 p-2 flex items-center justify-center"
              onClick={() => searchmovieArray(searchTerm)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
              placeholder="Search for movieArray (click search icon)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              id="SearchButton"
              className="border-2 rounded-full h-14 w-14 p-2 flex items-center justify-center"
              onClick={() => searchmovieArray(searchTerm)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-0 mt-4">
        {movieArray?.length > 0 ? (
          movieArray.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <h1>no movieArray found</h1>
        )}
      </div>
    </div>
  );
}
