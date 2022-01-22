// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import Navbar from "../../layout/navbar/Navbar";

// ||||||||||||||||||||||||||||| LoggedRoot Component ||||||||||||||||||||||||||||||||||||

const LoggedRoot = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div className="loggedRoot">
      <Navbar />
    </div>
  );
};
export default LoggedRoot;
