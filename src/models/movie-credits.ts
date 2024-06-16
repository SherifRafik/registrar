import Person from "@/models/person";

export default interface MovieCredits {
  cast: Person[];
  crew: Person[];
  id: number;
}
