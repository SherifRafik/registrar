// Hooks
import useGetMovieCredits from "@/hooks/useGetMovieCredits";

// Components
import ActorsList from "@/components/Actors/ActorsList/ActorsList";

// Styling
import "@/components/Actors/ActorsList/ActorList.css";

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
    <div className="actors-list">
      <ActorsList
        actors={actors}
        actorOnClick={(actorId) => actorOnClick(actorId)}
      />
    </div>
  );
};

export default ActorsListRenderer;
