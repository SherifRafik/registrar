// Bootstrap
import { Row } from "react-bootstrap";

// Hooks
import useStartGame from "@/hooks/useStartGame";

// Components
import ActorCard from "@/components/Actors/ActorCard/ActorCard";

const Game = () => {
  const actors = useStartGame();

  return (
    <>
      <Row className="mb-2">
        {actors.map((actor) => (
          <ActorCard actor={actor} onClick={() => console.log(actor.id)} />
        ))}
      </Row>
    </>
  );
};

export default Game;
