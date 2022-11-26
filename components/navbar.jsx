import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import style from "../styles/nav.module.css";

const MyNavbar = () => {
  return (
    <Navbar className={style.navbar} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className={style.brand}>
          Kelompok 2
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mylink">
            <Link href="/" className={style.nav_link}>
              HOME
            </Link>
            <Link href="/profile" className={style.nav_link}>
              PROFILE
            </Link>
          </Nav>

          <Nav>
            <Link href="/login" className={style.nav_link}>
              SING UP
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
