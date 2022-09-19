
import Navbar from "react-bootstrap/Navbar";
import LogoutButton from "./logout";
import {useAuth0} from '@auth0/auth0-react';
import logo from '../fotos/Redondosinfondo.png';

function NavUsuarioNo() {
 
  const { user} = useAuth0();
    return (   
       <Navbar className="navdeco" sticky="top">
      
      <img src={logo} alt="logo" width="100px" className="logonav"/>
        <Navbar.Brand href="#home" className="bienvenido">LUCKY</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="bienvenido">
             <a href="http//:localhost:3000">BIENVENIDO:  {user.name}   FOTO</a>           
          </Navbar.Text>
         
       <LogoutButton/>

        </Navbar.Collapse>
      
    </Navbar>);
  };


export default NavUsuarioNo;
