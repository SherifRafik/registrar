import { useState } from "react";

// Models
import Step, { StepType } from "@/models/step";

const useSteps = () => {
  const [steps, setSteps] = useState<Step[]>([]);

  const addStep = (type: StepType, id: number) => {
    setSteps((prevSteps) => [...prevSteps, { type, id }]);
  };

  const resetStepsFrom = (index: number) => {
    setSteps((prevSteps) => prevSteps.slice(0, index + 1));
  };

  return {
    steps,
    addStep,
    resetStepsFrom,
  };
};

export default useSteps;
