import Link from "next/link";
import { Col, Row, Card, Button, Container } from "react-bootstrap";
import style from "../styles/home.module.css";

const MyAbout = () => {
  return (
    <Container fluid className={style.about_border}>
      <h1 className={style.about_header}>AMAZING TEAM</h1>
      <Row>
        <Col className={style.about}>
          <Card className={style.card_main}>
            <Card.Img
              variant="top"
              src="https://bonx-react.pages.dev/static/d161f004dec37a028adaf60369449636/9c0a1/8.webp"
            />
            <Card.Body className={style.card_text}>
              <div className={style.name}>IRWAN HADI</div>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className={style.about}>
          <Card className={style.card_main}>
            <Card.Img
              variant="top"
              src="https://bonx-react.pages.dev/static/d161f004dec37a028adaf60369449636/9c0a1/8.webp"
            />
            <Card.Body className={style.card_text}>
              <div className={style.name}>RIZKY ROBBY</div>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className={style.about}>
          <Card className={style.card_main}>
            <Card.Img
              variant="top"
              src="https://bonx-react.pages.dev/static/d161f004dec37a028adaf60369449636/9c0a1/8.webp"
            />
            <Card.Body className={style.card_text}>
              <div className={style.name}>M. RIZANO</div>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyAbout;
