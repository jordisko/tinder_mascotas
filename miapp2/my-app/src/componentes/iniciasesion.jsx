import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LoginButton from "./login";


function NavUsuario() {
 
  
    return (   
         <Navbar>
      <Container>
        <Navbar.Brand href="#home">Proyecto</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
       <LoginButton/>
  
        </Navbar.Collapse>
      </Container>
    </Navbar>);
  };


export default NavUsuario;


