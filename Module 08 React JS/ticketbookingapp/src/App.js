import { useState } from "react";

import Guest from "./Components/Guest";
import User from "./Components/User";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let page;
  let button;

  if (isLoggedIn) {
    page = <User />;
    button = (
      <LogoutButton
        onLogout={() => setIsLoggedIn(false)}
      />
    );
  } else {
    page = <Guest />;
    button = (
      <LoginButton
        onLogin={() => setIsLoggedIn(true)}
      />
    );
  }

  return (
    <div>

      <h1>Ticket Booking App</h1>

      {page}

      <br />

      {button}

    </div>
  );
}

export default App;