import { useEffect, useState } from "react";

// Models
import Movie from "@/models/movie";
import PersonMovieCredits from "@/models/person-movie-credits";

// Services
import PeopleService from "@/services/PeopleService";

const useGetActorMovies = (actorId: number) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async (id: number) => {
      const response: PersonMovieCredits =
        await PeopleService.getCreditedMovies(id).then(
          (response) => response.data
        );
      setMovies(response.cast);
    };

    fetchMovies(actorId);
  }, [actorId]);

  return movies;
};

export default useGetActorMovies;
