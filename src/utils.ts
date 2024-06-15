import { ACTOR_NAMES } from "@/constants";

export const getRandomActor = () => {
  return ACTOR_NAMES[Math.floor(Math.random() * ACTOR_NAMES.length)];
};
