
function MovieCard({ movie }) {
  return (
    <div className="flex min-w-80 max-h-[500px] flex-col items-center justify-center border-zinc-200 border-2 shadow-2xl border-2 rounded-lg m-3 p-3 backdrop-blur-md">
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

export default MovieCard;
