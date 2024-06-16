import { ACTOR_NAMES, IMAGES_BASE_URL } from "@/constants";

export const getRandomActor = () => {
  return ACTOR_NAMES[Math.floor(Math.random() * ACTOR_NAMES.length)];
};

export const buildImageURL = (imagePath: string, imageSize: string) => {
  if (!imagePath) return "";

  return `${IMAGES_BASE_URL}/${imageSize}/${imagePath}`;
};
