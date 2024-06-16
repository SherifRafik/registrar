import { searchByName, getCreditedMovies } from "@/api/person-api";

// Constants
import { DEPARTMENT } from "@/constants";

// Models
import Person from "@/models/person";
import PersonMovieCredits from "@/models/person-movie-credits";
import SearchResults from "@/models/search-results";

// Utils
import { getRandomActor } from "@/utils";

class PeopleService {
  public searchByName = async () => {
    let filteredResults = [];

    do {
      const response: SearchResults<Person> = await searchByName(getRandomActor()).then(
        (response) => response.data
      );

      filteredResults = response.results.filter(
        (item) => item.known_for_department === DEPARTMENT
      );

      console.log(filteredResults)
    } while (filteredResults.length <= 0);

    return filteredResults[filteredResults.length - 1];
  };

  public getCreditedMovies = async (id: number) => {
    const response: PersonMovieCredits = await getCreditedMovies(id).then(
      (response) => response.data
    );

    return response.cast;
  };
}

export default new PeopleService();
