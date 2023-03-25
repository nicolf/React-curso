import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../CartWidget/CartWidget.jsx"

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">HPDevs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart"><CartWidget cantCarrito={1}/></Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#categoria1">Computadoras</NavDropdown.Item>
              <NavDropdown.Item href="#categoria2">Impresoras</NavDropdown.Item>
              <NavDropdown.Item href="#categoria3">Lectoras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#software">Software</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;