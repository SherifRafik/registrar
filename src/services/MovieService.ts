import { getMovieCredits } from "@/api/movie-api";

// Constants
import { DEPARTMENT } from "@/constants";

// Models
import MovieCredits from "@/models/movie-credits";

class MovieService {
  public getMovieCredits = async (id: number) => {
    const response: MovieCredits = await getMovieCredits(id).then(
      (response) => response.data
    );

    return response.cast.filter(
      (person) => person.known_for_department === DEPARTMENT
    );
  };
}

export default new MovieService();
