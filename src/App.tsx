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
import ProfilePage from "./pages/ProfilePage";
import GamePage from "./pages/GamePage";
import HelpPage from "./pages/HelpPage";
import InvitePage from "./pages/InvitePage";
import RankingPage from "./pages/RankingPage";
import ElementsPage from "./pages/ElementsPage";

function App() {
  WebApp.ready();
  WebApp.setBackgroundColor("#ffffff");
  WebApp.BackButton.show();
  WebApp.MainButton.show();
  WebApp.MainButton.onClick(() => {
    WebApp.openTelegramLink("https://t.me/ElementalGameBot");
  });
  WebApp.MainButton.setText("بازی");

  const LocationAwareComponent = () => {
    const location = useLocation();
    return (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/invite" element={<InvitePage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/elements" element={<ElementsPage />} />
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
