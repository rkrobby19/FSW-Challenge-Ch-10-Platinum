import Link from "next/link";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import style from "../styles/login.module.css";

const MyLogin = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src="https://bonx-react.pages.dev/static/1f5867f8036d938b9dfdaed5530c9249/a5da6/hero-position-img.webp"
            roundedCircle
            width="100%"
          />
        </Col>
        <Col>
          <div className="text-light text-center mt-5">
            <h1>LOGIN</h1>
          </div>

          <InputGroup>
            <Form.Control
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              className={style.transparent}
            />
          </InputGroup>
          <InputGroup>
            <Form.Control
              placeholder="Passwoord"
              type="Password"
              aria-label="Email"
              aria-describedby="basic-addon1"
              className={style.transparent}
            />
          </InputGroup>
          <div className="text-center">
            <Button
              className={style.login_button}
              variant="dark"
              href="/games/rps_game"
            >
              Login
            </Button>
          </div>
          <div className="text-light ms-3 mt-5">
            <h4>
              Do not have any account ?,{" "}
              <span className="color">
                <Link
                  href="/register"
                  style={{ textDecoration: "none", color: "orange" }}
                >
                  Signup here
                </Link>
              </span>
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyLogin;
