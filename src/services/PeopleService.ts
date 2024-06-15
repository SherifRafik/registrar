import { _get } from "@/api/apiClient";

class PeopleService {
  public getByName = (name: string) => {
    return _get(
      `search/person?query=${name}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc`
    );
  };
}

export default new PeopleService();
