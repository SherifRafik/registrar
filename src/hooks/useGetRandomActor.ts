import { useEffect, useState } from "react";

// Services
import PeopleService from "@/services/PeopleService";

// Models
import Person from "@/models/person";

const useGetRandomActor = () => {
  const [actor, setActor] = useState<Person>({} as Person);

  useEffect(() => {
    const fetchRandomActor = async () => {
      const actor: Person = await PeopleService.searchByName();
      setActor(actor);
    };

    fetchRandomActor();
  }, []);

  return actor;
};

export default useGetRandomActor;
