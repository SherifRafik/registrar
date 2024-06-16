import { useEffect, useState } from "react";

// Bootstrap
import { Row } from "react-bootstrap";

// Hooks
import useStartGame from "@/hooks/useStartGame";
import useSteps from "@/hooks/useSteps";

// Components
import ActorCard from "@/components/Actors/ActorCard/ActorCard";
import MoviesListRenderer from "@/components/Movies/MoviesList/MoviesListRenderer";
import ActorsListRenderer from "@/components/Actors/ActorsList/ActorListRenderer";

// Constants
import { ENTITY_TYPES } from "@/constants";
import useClickHandlers from "@/hooks/useClickHandlers";

const Game = () => {
  const actors = useStartGame();
  const { steps } = useSteps();
  const { handleActorClick, handleMovieClick } = useClickHandlers();
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (steps.length > 1) {
      const firstActor = actors.filter((actor) => actor.id != steps[0].id)[0]
        .id;
      const lastActor = steps[steps.length - 1].id;
      if (firstActor === lastActor) {
        setWin(true);
      } else {
        setWin(false);
      }
    } else {
      setWin(false);
    }
  }, [steps, actors]);

  return (
    <>
      {win ? (
        <div>Congratulations! You have connected the celebrities!</div>
      ) : (
        <>
          <Row className="mb-2">
            {actors.map((actor) => (
              <ActorCard
                key={actor.id}
                actor={actor}
                onClick={() => handleActorClick(actor.id, 0)}
              />
            ))}
          </Row>

          {steps.map((step, index) => {
            return step.type === ENTITY_TYPES.PERSON ? (
              <Row>
                <MoviesListRenderer
                  actorId={step.id}
                  movieOnClick={(id) => handleMovieClick(id, index + 1)}
                />
              </Row>
            ) : (
              <Row>
                <ActorsListRenderer
                  movieId={step.id}
                  actorOnClick={(id) => handleActorClick(id, index + 1)}
                />
              </Row>
            );
          })}
        </>
      )}
    </>
  );
};

export default Game;
