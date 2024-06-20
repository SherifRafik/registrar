import { _get } from "@/api/api-client";

export const getMovieCredits = (id: number) => {
  return _get(`/movie/${id}/credits`, {
    params: {
      language: "ar-SA",
    },
  });
};
