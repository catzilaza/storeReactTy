import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" color="white">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image src={viteLogo} alt="vite.svg"></Image>
            <Image src={reactLogo} alt="vite.svg"></Image>
            Ts Shopping Online Brand link
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#3">Cart</Nav.Link>
            <Nav.Link href="#3">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
