import './App.css'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PageOne from './onboarding/PageOne';
import PageTwo from './onboarding/PageTwo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/two" element={<PageTwo />} />
      </Routes>
    </Router>
  );
}

export default App;