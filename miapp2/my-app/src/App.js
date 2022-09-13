import "./App.css";
import NavUsuario from "./componentes/iniciasesion";
//import Footer from "./componentes/footer";
import NavUsuarioNo from "./componentes/yahasiniciado";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./componentes/footer";
//import Registrate from "./componentes/registrate";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <>
          <NavUsuarioNo />
        </>
      ) : (
        <NavUsuario />
      )}
      <Footer />
    </div>
  );
}

export default App;
//      <Registrate /> <Footer /> <Navbar />
