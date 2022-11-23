import Head from "next/head";
import style from "../../styles/Simon.module.css";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../components/navbar";
import GameButton from "../../components/simon_game/game_button";
import ScoreTable from "../../components/simon_game/score_table";
import TheSimonGame from "../../components/simon_game/simon_game";

const SimonGame = () => {
    return (
        <>
            <Head>
                <title>Simon Game</title>
                {/* Font Awesome Icon */}
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v6.1.2/css/all.css"
                    integrity="sha384-fZCoUih8XsaUZnNDOiLqnby1tMJ0sE7oBbNk2Xxf5x8Z4SvNQ9j83vFMa/erbVrV"
                    crossOrigin="anonymous"
                />
            </Head>
            <MyNavbar />
            <Container>
                <h1 className={style.title}>
                    Press The Play Button To Start The Game
                </h1>
                <Row>
                    <Col sm="5">
                        <ScoreTable />
                        <GameButton />
                    </Col>
                    <Col sm="7" className="m-auto">
                        <TheSimonGame />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SimonGame;
