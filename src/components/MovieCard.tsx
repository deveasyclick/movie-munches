import type { Movie } from "../types/Movie";

interface MovieCardProps {
  movie: Movie;
}
const MovieCard = ({
  movie: {
    title,
    id,
    poster_path,
    vote_average,
    original_language,
    release_date,
  },
}: MovieCardProps) => {
  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/no-movie.png";
  return (
    <div className="movie-card" key={id}>
      <img src={posterPath} alt={title} />
      <div className="mt-4">
        <h3>{title}</h3>
      </div>

      <div className="content">
        <div className="rating">
          <img src="star.svg" alt="Star Icon" />
          <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
        </div>
        <span>•</span>
        <div className="lang">{original_language}</div>
        <span>•</span>
        <div className="year">
          {release_date ? release_date.split("-")[0] : "N/A"}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
