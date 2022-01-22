// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import "../styles/router/app.scss";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";

// ||||||||||||||||||||||||||||| App Component ||||||||||||||||||||||||||||||||||||

const App = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};
export default App;
