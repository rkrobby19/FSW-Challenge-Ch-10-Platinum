import { get } from "jquery";
import Link from "next/link";
import { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import style from "../styles/nav.module.css";

const MyNavbar = () => {
    const getToken = () => {
        const token = localStorage.getItem("jwt-token");
        const show = console.log(token);
        if (token === null || undefined) {
            return {
                status: "INVALID",
                show: false,
            };

            console.log(show);
        }
        return {
            status: "VALID",
            show: true,
        };
    };
    const handleLogout = () => {
        let ans = window.confirm(`Are you sure want to logout?`);
        if (ans) {
            localStorage.removeItem("jwt-token");
            alert(`Thanks for coming`);
            window.location.href = "/login";
        }
    };

    useEffect(() => {
        const mytoken = getToken();
        console.log(mytoken);
    }, []);

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
                            PROFILE PAGE
                        </Link>
                    </Nav>

                    <Nav>
                        <Link
                            href=""
                            className={style.nav_link}
                            onClick={handleLogout}
                        >
                            LOGOUT
                        </Link>
                        <Link href="/login" className={style.nav_link}>
                            SIGN UP
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
