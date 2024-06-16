import Person from "@/models/person";

// Components
import ActorCard from "@/components/Actors/ActorCard/ActorCard";

interface ActorsListProps {
  actors: Person[];
  actorOnClick: (id: number) => void;
}

const ActorsList = ({ actors, actorOnClick }: ActorsListProps) => {
  return (
    <>
      {actors.map((actor) => (
        <ActorCard
          key={actor.id}
          actor={actor}
          onClick={() => actorOnClick(actor.id)}
        />
      ))}
    </>
  );
};

export default ActorsList;
