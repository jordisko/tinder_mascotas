import "./App.css";
import NavUsuario from "./componentes/header";
//import Footer from "./componentes/footer";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./componentes/login";

import LogoutButton from "./componentes/logout";
import Profile from "./componentes/profile";
import Footer from "./componentes/footer";
//import Registrate from "./componentes/registrate";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <NavUsuario />
      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
      <Footer />
    </div>

  );
}

export default App;
//      <Registrate /> <Footer /> <Navbar />
