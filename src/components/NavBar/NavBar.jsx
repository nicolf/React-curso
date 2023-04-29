import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../CartWidget/CartWidget.jsx"
import { BotonDarkMode } from './BotonDarkMode/BotonDarkMode.jsx';
import { Link } from 'react-router-dom';
import { memo } from 'react';


export const NavBar = memo(() => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">HPDevs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart"><CartWidget cantCarrito={1}/></Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/notebooks">Notebooks</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/procesadores">Procesadores</NavDropdown.Item>              
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/sillas_gamer">Sillas gamer</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/celulares">Celulares</NavDropdown.Item>
            </NavDropdown>
            <BotonDarkMode />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
})