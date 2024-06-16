// Hooks
import useGetCreditedMovies from "@/hooks/useGetCreditedMovies";

// Components
import MoviesList from "@/components/Movies/MoviesList/MoviesList";

// Styling
import "@/components/Movies/MoviesList/MoviesList.css";


interface MoviesActorListRendererProps {
  actorId: number;
  movieOnClick: (id: number) => void;
}

const MoviesListRenderer = ({
  actorId,
  movieOnClick,
}: MoviesActorListRendererProps) => {
  const movies = useGetCreditedMovies(actorId);

  return (
    <div className="movies-list">
      <MoviesList
        movies={movies}
        movieOnClick={(movieId) => movieOnClick(movieId)}
      />
    </div>
  );
};

export default MoviesListRenderer;
