import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { Badge } from "@mui/material";
import {
  SettingsSystemDaydreamOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import logo from "../../src/wvutechlogo-png.png";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Header = () => {
  const { loggedIn, setLoggedIn, admin, setAdmin } = useAuthStatus();
  const auth = getAuth();
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#eaaa00",
      },
    },
  });

  const onLogout = () => {
    console.log("hello");
    auth.signOut();
    setLoggedIn(false);
    setAdmin(false);
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
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
                <Nav.Link href="/cart">
                  <Badge color="secondary" badgeContent={0}>
                    <ShoppingCart />
                  </Badge>
                  Cart
                </Nav.Link>
                {admin && (
                  <>
                    <Nav.Link href="/manageproducts">
                      Product Management
                    </Nav.Link>
                  </>
                )}
                {loggedIn ? (
                  <>
                    <Nav.Link onClick={onLogout}>Sign Out</Nav.Link>
                  </>
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
    </ThemeProvider>
  );
};

export default Header;
