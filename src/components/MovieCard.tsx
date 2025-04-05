import type { Movie } from "../types/Movie";

interface MovieCardProps {
  movie: Movie;
}
const MovieCard = ({ movie: { title, id, poster_path } }: MovieCardProps) => {
  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image+Available";
  return (
    <div className="movie-card">
      <img src={posterPath} alt={title} />
      <h3 className="text-white" key={id}>
        {title}
      </h3>
    </div>
  );
};

export default MovieCard;
