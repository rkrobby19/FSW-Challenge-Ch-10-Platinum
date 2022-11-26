import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { SortNumericDown } from "react-bootstrap-icons";
import style from "../styles/login.module.css";
import { firebaseRegister } from "../util/auth";

const MyRegister = () => {
  const router = useRouter();

  const [regFullname, setRegFullname] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regMsg, setRegMsg] = useState("");

  const submitRegister = async () => {
    console.log(
      "REGISTER BUTTON ",
      regFullname,
      regUsername,
      regEmail,
      regPassword
    );
    const resp = await firebaseRegister(
      regFullname,
      regUsername,
      regEmail,
      regPassword
    );
    console.log(resp);
    if (resp.status === "ERROR") {
      setRegMsg(resp.message);
    } else {
      setRegMsg("");
      router.push("/profile");
    }
  };
  return (
    <Container className={style.all}>
      <Row>
        <Col>
          <Image
            src="https://htmldemo.net/bonx/bonx/assets/img/others/about-thumb.webp"
            roundedCircle
            className={style.register_image}
          />
        </Col>
        <Col>
          <div className="text-light text-center mt-5">
            <h1>REGISTER</h1>
          </div>
          <InputGroup>
            <Form.Control
              placeholder="Full Name"
              onChange={(e) => setRegFullname(e.target.value)}
              type="Text"
              aria-label="Full Name"
              aria-describedby="basic-addon1"
              className={style.transparent}
            />
          </InputGroup>
          <InputGroup>
            <Form.Control
              placeholder="User Name"
              onChange={(e) => setRegUsername(e.target.value)}
              type="Text"
              aria-label="User Name"
              aria-describedby="basic-addon1"
              className={style.transparent}
            />
          </InputGroup>
          <InputGroup>
            <Form.Control
              placeholder="Email"
              onChange={(e) => setRegEmail(e.target.value)}
              aria-label="Email"
              aria-describedby="basic-addon1"
              className={style.transparent}
            />
          </InputGroup>
          <InputGroup>
            <Form.Control
              placeholder="Password"
              onChange={(e) => setRegPassword(e.target.value)}
              type="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              className={style.transparent}
            />
          </InputGroup>

          <div className="text-center">
            <Button
              className={style.login_button}
              variant="dark"
              onClick={submitRegister}
            >
              Submit
            </Button>
          </div>
          <div>
            <h6 className="text-light">{regMsg}</h6>
          </div>
          <div className="text-light ms-3 mt-3">
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
