// Bootstrap
import { Card } from "react-bootstrap";

// Models
import Person from "@/models/person";

// Utils
import { buildImageURL } from "@/utils";

// Constants
import { IMAGE_SIZE } from "@/constants";
import PLACEHOLDER from "$/placeholder.svg";

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
        src={
          actor.profile_path
            ? buildImageURL(actor.profile_path, IMAGE_SIZE)
            : PLACEHOLDER
        }
      />
      <Card.Body className="text-center">
        <Card.Title>{actor.original_name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ActorCard;
