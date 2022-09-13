
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LogoutButton from "./logout";
import {useAuth0} from '@auth0/auth0-react';


function NavUsuarioNo() {
 
  const { user} = useAuth0();
    return (   
       <Navbar>
      <Container>
        <Navbar.Brand href="#home">Proyecto</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            BIENVENIDO: {user.name}
          </Navbar.Text>
         
       <LogoutButton/>

        </Navbar.Collapse>
      </Container>
    </Navbar>);
  };


export default NavUsuarioNo;
