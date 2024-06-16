// Hooks
import useGetCreditedMovies from "@/hooks/useGetCreditedMovies";

// Components
import MoviesList from "@/components/Movies/MoviesList/MoviesList";

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
    <MoviesList movies={movies} movieOnClick={(movieId) => movieOnClick(movieId)} />
  );
};

export default MoviesListRenderer;
