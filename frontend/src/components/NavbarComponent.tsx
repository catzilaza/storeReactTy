import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import cartIcon from "../assets/cartIcon.png";
import keyIcon from "../assets/keyIcon.png";
import registerIcon from "../assets/registerIcon.png";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Nav.Link
              as={Link}
              to="/cart"
              style={{
                border: "1px solid white",
                marginRight: "2px",
                
              }}
            >
              <Image src={cartIcon} alt="cartIcon"></Image><br/>Cart items
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/signin"
              style={{ border: "1px solid white", marginRight: "2px"}}
            >
              <Image src={keyIcon} alt="cartIcon"></Image><br/>Sign In
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/register"
              style={{ border: "1px solid white", marginRight: "2px" }}
            >
              <Image src={registerIcon} alt="cartIcon"></Image><br/>Register
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
