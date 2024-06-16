// Bootstrap
import { Card } from "react-bootstrap";

// Models
import Movie from "@/models/movie";

// Styling
import "@/components/Movies/MovieCard/MovieCard.css";

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
    <Card className="movie-card" onClick={onClick}>
      <Card.Body className="text-center">
        <Card.Title>{movie.original_title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
