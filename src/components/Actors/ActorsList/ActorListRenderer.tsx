// Hooks
import useGetMovieCredits from "@/hooks/useGetMovieCredits";

// Components
import ActorsList from "@/components/Actors/ActorsList/ActorsList";

interface ActorsListRendererProps {
  movieId: number;
  actorOnClick: (id: number) => void;
}

const ActorsListRenderer = ({
  movieId,
  actorOnClick,
}: ActorsListRendererProps) => {
  const actors = useGetMovieCredits(movieId);

  return (
    <ActorsList actors={actors} actorOnClick={(actorId) => actorOnClick(actorId)} />
  );
};

export default ActorsListRenderer;
