import { ENTITY_TYPES } from "@/constants";

type EntityTypes = typeof ENTITY_TYPES;

export type StepType = EntityTypes[keyof EntityTypes];

export default interface Step {
  type: StepType;
  id: number;
}
