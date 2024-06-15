import Movie from "@/models/movie";
import Person from "@/models/person";

export default interface PersonMovieCredits {
  cast: Movie[];
  crew: Person[];
  id: number;
}
