import {Container, Nav, Navbar} from 'react-bootstrap';
import CompanyData from '../../assets/data';

const Menu = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container className='px-5'>

          <Navbar.Brand href="#home">{CompanyData.menu.companyName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#features">Servicios</Nav.Link>
              <Nav.Link href="#map">Dirección</Nav.Link>
              <Nav.Link href="#testimonials">Testimonios</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    )
}

export default Menu;

// TODO: Change the href attr