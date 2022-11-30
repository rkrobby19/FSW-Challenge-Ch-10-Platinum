import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "../styles/Home.module.css";

const MyCard = (props) => {
  const { scoreData } = props;
  console.log(scoreData);
  return (
    <Container fluid>
      <Row>
        <h1 className={style.card_header}>CHOOSE GAME TO PLAY</h1>
        <Col className={style.card_group}>
          <Card
            box-shadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            className={style.card}
          >
            <Card.Img
              className={style.card_image}
              variant="top"
              src="https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S2_1200x1600-a1c30209e3b9fb63144daa9b5670f503?h=854&resize=1&w=640"
            />
            <Card.Body>
              <Card.Title className={style.card_title}>SCISSOR</Card.Title>
              <Card.Text>
                Rock wins against scissors; paper wins against rock; and
                scissors wins against paper. Variants of this game have been
                recorded as early as the nineteenth century.
              </Card.Text>
              <Link href="/games/rps_game">
                <Button variant="outline-dark mx-1">Let's Play</Button>
              </Link>
              {scoreData.rps ? (
                <Button variant="warning mx-1">Already Played</Button>
              ) : (
                <></>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col className={style.card_group}>
          <Card className={style.card}>
            <Card.Img
              className={style.card_image}
              variant="top"
              src="https://i.postimg.cc/NjVy21zz/simon.jpg"
            />
            <Card.Body>
              <Card.Title className={style.card_title}>SIMON</Card.Title>
              <Card.Text>
                The device has four colored buttons, each producing a particular
                tone when it is pressed or activated by the device.
              </Card.Text>
              <Link href="/games/simon_game">
                <Button variant="outline-dark mx-1">Let's Play</Button>
              </Link>
              {scoreData.simon ? (
                <Button variant="warning mx-1">Already Played</Button>
              ) : (
                <></>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col className={style.card_group}>
          <Card
            box-shadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            className={style.card}
          >
            <Card.Img
              className={style.card_image}
              variant="top"
              src="https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=854&resize=1&w=640"
            />
            <Card.Body>
              <Card.Title className={style.card_title}>DUMMY</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text and make
                up the to.
              </Card.Text>
              <Link href="/games/dummy_games">
                <Button variant="outline-dark mx-1">Let's Play</Button>
              </Link>
              {scoreData.dummy ? (
                <Button variant="warning mx-1">Already Played</Button>
              ) : (
                <></>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyCard;
