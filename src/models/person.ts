import Movie from "@/models/movie";
import TvShow from "@/models/tv-show";

export default interface Person {
  id: number;
  name: string;
  profile_path: string;
  adult: boolean;
  popularity: number;
  known_for: Array<Movie | TvShow>;
  known_for_department: string;
  original_name: string;
}
