import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthStatus } from "../hooks/useAuthStatus";
import logo from "../../src/wvutechlogo-png.png";

const Header = () => {
  const { loggedIn, setLoggedIn } = useAuthStatus();
  const auth = getAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    console.log("hello");
    auth.signOut();
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="38"
              height="38"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{" "}
            <h3 className="d-inline-block">WVU Tech Bookstore</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">Cart</Nav.Link>
              {loggedIn ? (
                <Nav.Link onClick={onLogout}>Sign Out</Nav.Link>
              ) : (
                // <button type="button" onClick={onLogout}>
                //   Sign Out
                // </button>
                <Nav.Link href="/signin">Sign In</Nav.Link>
              )}
              {/* <Nav.Link href="/signin">Sign In</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
