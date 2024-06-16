// Models
import Movie from "@/models/movie";

// Components
import MovieCard from "@/components/Movies/MovieCard/MovieCard";

interface MoviesListProps {
  movies: Movie[];
  movieOnClick: (id: number) => void;
}

const MoviesList = ({ movies, movieOnClick }: MoviesListProps) => {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => movieOnClick(movie.id)}
        />
      ))}
    </>
  );
};

export default MoviesList;
