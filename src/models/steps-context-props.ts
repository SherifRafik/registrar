import Step, { StepType } from "./step";

export default interface StepsContextProps {
  steps: Step[];
  addStep: (type: StepType, id: number) => void;
  resetStepsFrom: (index: number) => void;
}
