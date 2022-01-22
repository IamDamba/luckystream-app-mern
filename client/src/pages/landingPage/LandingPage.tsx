// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../media/icon.svg";

// ||||||||||||||||||||||||||||| LandingPage Component ||||||||||||||||||||||||||||||||||||

const LandingPage = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <main className="landingPage">
      <div className="content">
        <nav>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="button">
            <Link to={"/signin"}>Sign In</Link>
          </div>
        </nav>
        <div className="first">
          <h1>Films, séries TV et bien plus en illimité.</h1>
          <p>Où que vous soyez. Annulez à tout moment.</p>
          <p>
            Prêt à regarder LuckyStream ? Saisissez votre adresse e-mail pour
            vous abonner ou réactiver votre abonnement.
          </p>
        </div>
        <form action="" className="second">
          <div className="input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email here"
            />
          </div>
          <div className="button">
            <button type="submit">Start Now</button>
          </div>
        </form>
      </div>
    </main>
  );
};
export default LandingPage;
