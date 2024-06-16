import "./App.css";

// Components
import Game from "@/components/Game/Game";

// Contexts
import { StepsProvider } from "./contexts/StepsContext";

const App = () => (
  <StepsProvider>
    <Game />
  </StepsProvider>
);

export default App;
