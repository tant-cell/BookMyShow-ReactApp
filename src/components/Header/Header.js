import './Header.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  FormControl  from 'react-bootstrap/FormControl';
import  Form  from 'react-bootstrap/Form';

function Header() {
  return (
    <div >
      <Navbar bg="dark"  variant ="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">BookMyShow</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/movies">Movies</Nav.Link>
        <NavDropdown title="hey there" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          <NavDropdown.Item href="/movies">Another movie</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
  
</Navbar>
<Container fluid  style={{background:"black" , color:"white" }}>
      <a>first option</a>
      <a>second option</a>

  </Container>
    </div>
  );
}

export default Header;
