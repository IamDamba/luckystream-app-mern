// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";

// ||||||||||||||||||||||||||||| Navbar Component ||||||||||||||||||||||||||||||||||||

const Navbar = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <nav>
      <div className="first"></div>
      <div className="second"></div>
    </nav>
  );
};
export default Navbar;
