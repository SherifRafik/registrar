// Bootstrap
import { Row } from "react-bootstrap";

// Hooks
import useGetRandomActor from "@/hooks/useGetRandomActor";

// Components
import ActorCard from "@/components/Actors/ActorCard/ActorCard";

const Game = () => {
  const firstActor = useGetRandomActor();
  const secondActor = useGetRandomActor();

  if (!firstActor || !secondActor) return <div>Loading ...</div>;

  return (
    <Row className="mb-3">
      <ActorCard
        actor={firstActor}
        onClick={() => console.log(firstActor.name)}
      />

      <ActorCard
        actor={secondActor}
        onClick={() => console.log(secondActor.name)}
      />
    </Row>
  );
};

export default Game;
