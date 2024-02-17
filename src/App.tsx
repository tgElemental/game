import "./App.css";
import {
  MemoryRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import WebApp from "@twa-dev/sdk";
import HomePage from "./pages/HomePage";

function App() {
  WebApp.ready();
  WebApp.setBackgroundColor("#ffffff");
  const LocationAwareComponent = () => {
    const location = useLocation();
    return (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    );
  };

  return (
    <Router>
      <LocationAwareComponent />
    </Router>
  );
}

export default App;
