import { useEffect, useState } from "react";

// Services
import PeopleService from "@/services/PeopleService";

// Models
import Person from "@/models/person";

// Utils
import { getRandomActor } from "@/utils";

const useGetRandomActor = () => {
  const [actor, setActor] = useState<Person>({} as Person);

  useEffect(() => {
    const fetchRandomActor = async () => {
      const actor: Person = await PeopleService.searchByName(getRandomActor());
      setActor(actor);
    };

    fetchRandomActor();
  }, []);

  return actor;
};

export default useGetRandomActor;
