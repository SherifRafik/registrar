// Bootstrap
import { Card } from "react-bootstrap";

// Models
import Person from "@/models/person";

// Utils
import { buildImageURL } from "@/utils";

// Constants
import { IMAGE_SIZE } from "@/constants";

// Styling
import "@/components/Actors/ActorCard/ActorCard.css";

interface ActorCardProps {
  actor: Person;
  onClick: () => void;
}

const ActorCard = ({ actor, onClick }: ActorCardProps) => {
  return (
    <Card className="actor-card" onClick={onClick}>
      <Card.Img
        className="actor-avatar"
        variant="top"
        src={buildImageURL(actor.profile_path, IMAGE_SIZE)}
      />
      <Card.Body className="text-center">
        <Card.Title>{actor.original_name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ActorCard;
