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

const MyRegister = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src="https://htmldemo.net/bonx/bonx/assets/img/others/about-thumb.webp"
            roundedCircle
          />
        </Col>
        <Col>
          <div className="text-light text-center mt-5">
            <h1>REGISTER</h1>
          </div>
          <InputGroup>
            <Form.Control
              placeholder="User Name"
              type="Text"
              aria-label="Email"
              aria-describedby="basic-addon1"
              className={style.transparent}
            />
          </InputGroup>
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
              Submit
            </Button>
          </div>
          <div className="text-light ms-3 mt-5">
            <h4>
              Bak to Login Page{" "}
              <span className="color">
                <Link
                  href="/login"
                  style={{ textDecoration: "none", color: "orange" }}
                >
                  Klick here
                </Link>
              </span>
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyRegister;
