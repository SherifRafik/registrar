import { _get } from "@/api/api-client";

export const getCreditedMovies = (id: number) => {
  return _get(`/person/${id}/movie_credits`, {
    params: {
      language: "ar-SA",
    },
  });
};

export const searchByName = (name: string) => {
  return _get(`search/person`, {
    params: {
      query: name,
      include_adult: false,
      language: "ar-SA",
    },
  });
};
