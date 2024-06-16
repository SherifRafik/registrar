import { ReactNode, createContext, useState } from "react";

// Models
import Step, { StepType } from "@/models/step";
import StepsContextProps from "@/models/steps-context-props";

export const StepsContext = createContext<StepsContextProps | undefined>(
  undefined
);

export const StepsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [steps, setSteps] = useState<Step[]>([]);

  const addStep = (type: StepType, id: number) => {
    setSteps((prevSteps) => [...prevSteps, { type, id }]);
  };

  const resetStepsFrom = (index: number) => {
    setSteps((prevSteps) => prevSteps.slice(0, index));
  };

  return (
    <StepsContext.Provider value={{ steps, addStep, resetStepsFrom }}>
      {children}
    </StepsContext.Provider>
  );
};
