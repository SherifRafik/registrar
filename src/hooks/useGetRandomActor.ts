import { useEffect, useState } from "react";

// Services
import PeopleService from "@/services/PeopleService";

// Models
import SearchResults from "@/models/search-results";
import Person from "@/models/person";

// Utils
import { getRandomActor } from "@/utils";

// Constants
import { DEPARTMENT } from "@/constants";

const useGetRandomActor = () => {
  const [actor, setActor] = useState<Person | null>(null);

  useEffect(() => {
    const fetchRandomActor = async () => {
      let filteredResults = [];
      do {
        const response: SearchResults<Person> = await PeopleService.getByName(
          getRandomActor()
        ).then((response) => response.data);

        filteredResults = response.results.filter(
          (item) => item.known_for_department === DEPARTMENT
        );

        console.log(filteredResults);
      } while (filteredResults.length <= 0);

      setActor(filteredResults[filteredResults.length - 1]);
    };

    fetchRandomActor();
  }, []);

  return actor;
};

export default useGetRandomActor;
