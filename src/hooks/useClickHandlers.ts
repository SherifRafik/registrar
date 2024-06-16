import { ENTITY_TYPES } from "@/constants";

// Hooks
import useSteps from "@/hooks/useSteps";

const useClickHandlers = () => {
  const { steps, addStep, resetStepsFrom } = useSteps();

  const handleActorClick = (id: number, stepIndex: number) => {
    if (stepIndex < steps.length) {
      resetStepsFrom(stepIndex);
    }

    addStep(ENTITY_TYPES.PERSON, id);
  };

  const handleMovieClick = (id: number, stepIndex: number) => {
    if (stepIndex <= steps.length) {
      resetStepsFrom(stepIndex);
    }

    addStep(ENTITY_TYPES.MOVIE, id);
  };

  return {
    handleActorClick,
    handleMovieClick,
  };
};

export default useClickHandlers;
