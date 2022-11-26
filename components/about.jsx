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
              // className={style.card_text_image}
            />
            <Card.Body className={style.card_text}>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-dark mx-1">IRWAN HADI</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className={style.about}>
          <Card className={style.card_main}>
            <Card.Img
              variant="top"
              src="https://bonx-react.pages.dev/static/d161f004dec37a028adaf60369449636/9c0a1/8.webp"
              // className={style.card_text_image}
            />
            <Card.Body className={style.card_text}>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-dark mx-1">RIZKY ROBBY</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className={style.about}>
          <Card className={style.card_main}>
            <Card.Img
              variant="top"
              src="https://bonx-react.pages.dev/static/d161f004dec37a028adaf60369449636/9c0a1/8.webp"
              // className={style.card_text_image}
            />
            <Card.Body className={style.card_text}>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-dark mx-1">M. RIZANO</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyAbout;
