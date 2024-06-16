import { useContext } from "react";

// Models
import StepsContextProps from "@/models/steps-context-props";

// Contexts
import { StepsContext } from "@/contexts/StepsContext";

const useSteps = (): StepsContextProps => {
  const context = useContext(StepsContext);

  if (context === undefined) {
    throw new Error("useSteps must be used within a StepsProvider");
  }

  return context;
};

export default useSteps;
