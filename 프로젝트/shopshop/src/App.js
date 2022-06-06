import logo from './logo.svg';
import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
// https://www.fwantastic.com/2020/03/react-reactstrap.html

function App() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </div>
  );
}

export default App;
