import Link from "next/link";
import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import style from "../styles/nav.module.css";

const MyNavbar = () => {
    const handleLogout = () => {
        let ans = window.confirm(`Are you sure want to logout?`);
        if (ans) {
            localStorage.removeItem("jwt-token");
            alert(`Thanks for coming`);
            window.location.href = "/login";
        }
    };


    const userData = useSelector((state) => {
        return state.userReducer;
    });


    useEffect(() => {}, []);


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
                        {!userData.uid ? (
                            <>
                                <Link href="/login" className={style.nav_link}>
                                    SIGN UP
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href=""
                                    className={style.nav_link}
                                    onClick={handleLogout}
                                >
                                    LOGOUT
                                </Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
