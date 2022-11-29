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
import { useDispatch } from "react-redux";
import { loadingAction } from "../redux/reducer/loading";
import style from "../styles/login.module.css";
import { firebaseLogin } from "../util/auth";
import MyButton from "./loading_button";

const MyLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");

  const submitLogin = async () => {
    dispatch(loadingAction.toggleLoadingStatus());
    const resp = await firebaseLogin(loginEmail, loginPassword);
    if (resp.status === "SUCCESS") {
      dispatch(loadingAction.toggleLoadingStatus());
      router.push("/profile");
    } else {
      dispatch(loadingAction.toggleLoadingStatus());
      setLoginMsg(resp.message);
    }
  };

  return (
    <Container className={style.all}>
      <Row>
        <Col>
          <Image
            src="https://bonx-react.pages.dev/static/1f5867f8036d938b9dfdaed5530c9249/a5da6/hero-position-img.webp"
            roundedCircle
            className={style.login_image}
          />
        </Col>
        <Col>
          <div className="text-light text-center mt-5">
            <h1>LOGIN</h1>
          </div>

          <InputGroup>
            <Form.Control
              placeholder="Email"
              onChange={(e) => setLoginEmail(e.target.value)}
              aria-label="Email"
              aria-describedby="basic-addon1"
              className={style.transparent}
            />
          </InputGroup>
          <InputGroup>
            <Form.Control
              placeholder="Passwoord"
              onChange={(e) => setLoginPassword(e.target.value)}
              type="Password"
              aria-label="Email"
              aria-describedby="basic-addon1"
              className={style.transparent}
            />
          </InputGroup>
          <div className="text-center">
            <MyButton title="Login" />
            <h6 className="text-light">{loginMsg}</h6>
          </div>
          <div className="text-center">
            <Button
              className={style.login_button}
              variant="dark"
              title="Login"
              onClick={submitLogin}
            >
              Login
            </Button>
          </div>
          <div>{/* <h6 className="text-light">{loginMsg}</h6> */}</div>
          <div className="text-light ms-3 mt-3">
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
