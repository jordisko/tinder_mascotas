import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavUsuario() {
  
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Proyecto</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            BIENVENIDO: <a href="#perfil">NOMBRE</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavUsuario;