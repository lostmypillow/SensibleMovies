import SearchIcon from "./search.svg";
function MovieCard({ movie }) {
  return (
    <div className="flex basis-1 md:basis-1/3 flex-col items-center justify-center border-red-100 border-4">
      <p className="text-2xl font-semibold">{movie.Year}</p>
      <img
        src={movie.Poster != "N/A" ? movie.Poster : { SearchIcon }}
        alt="poster"
      />
      <span>{movie.Type.toUpperCase()}</span>
      <h3 className="text-3xl font-2xl">{movie.Title}</h3>
    </div>
  );
}

export default MovieCard;
