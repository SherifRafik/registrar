import { useEffect, useState } from "react";

// Models
import Movie from "@/models/movie";

// Services
import PeopleService from "@/services/PeopleService";

const useGetCreditedMovies = (actorId: number) => {
  const [creditedMovies, setCreditedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getCreditedMovies = async () => {
      const response: Movie[] = await PeopleService.getCreditedMovies(actorId);
      setCreditedMovies(response);
    };

    getCreditedMovies();
  }, [actorId]);

  return creditedMovies;
};

export default useGetCreditedMovies;
