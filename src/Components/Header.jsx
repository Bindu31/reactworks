import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function NavScrollExample() {
  return (
    <Navbar fixed="top" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Electronics</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Tv">TV</Nav.Link>
            <Nav.Link href="/headphone">HEADPHONES</Nav.Link>
            <Nav.Link href="/speakers">SPEKERS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className='logout'>
<button type="button" class="btn btn-outline-primary" ><Link to={'/reactworks'}>Logout</Link></button>
      </div>
    </Navbar>

  );
}

export default NavScrollExample;
