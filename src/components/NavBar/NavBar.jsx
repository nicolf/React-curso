import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../CartWidget/CartWidget.jsx"

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">HPDevs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/checkout"><CartWidget cantCarrito={1}/></Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/electronics">Electronica</NavDropdown.Item>
              <NavDropdown.Item href="/category/jewelery">Joyas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category/men's%20clothing">Ropa Gamer de Hombre</NavDropdown.Item>
              <NavDropdown.Item href="/category/women's%20clothing">Ropa Gamer de Mujer</NavDropdown.Item>              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;