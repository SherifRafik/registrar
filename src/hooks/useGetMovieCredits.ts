import { useEffect, useState } from "react";

// Models
import Person from "@/models/person";

// Services
import MovieService from "@/services/MovieService";

const useGetMovieCredits = (movieId: number) => {
  const [movieCredits, setMovieCredits] = useState<Person[]>([]);

  useEffect(() => {
    const getCreditedMovies = async () => {
      const response: Person[] = await MovieService.getMovieCredits(movieId);
      setMovieCredits(response);
    };

    getCreditedMovies();
  }, [movieId]);

  return movieCredits;
};

export default useGetMovieCredits;
