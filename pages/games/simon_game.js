import { useEffect, useState } from "react";
import Head from "next/head";
import $ from "jquery";
import style from "../../styles/Simon.module.css";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../components/navbar";
import MyFooter from "../../components/footer";
import GameButton from "../../components/simon_game/game_button";
import ScoreTable from "../../components/simon_game/score_table";
import TheSimonGame from "../../components/simon_game/simon_game";

const SimonGame = () => {
    const [play, setPlay] = useState(false);

    let buttonColours = ["red", "blue", "green", "yellow"];
    let gamePattern = [];
    let userPattern = [];

    let level = 0;

    const playHandler = () => {
        setPlay(true);
        gamePlay();
    };
    const restartHandler = () => {
        level = 0;
        gamePattern = [];
        userPattern = [];
        setPlay(false);
    };

    const gamePlay = () => {
        if (play === true) {
            nextSequence();
        }
    };

    const nextSequence = () => {
        userPattern = [];
        level++;
        alert(`Level: ${level}`);
        let randomNumber = Math.floor(Math.random() * 4);
        let randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);

        playRound(gamePattern);
    };

    const playRound = (sequence) => {
        sequence.forEach((color, index) => {
            setTimeout(() => {
                $("#" + color)
                    .fadeIn(100)
                    .fadeOut(100)
                    .fadeIn(100);
                // playSound(color);
            }, (index + 1) * 600);
        });
    };

    const playerChoices = (e) => {
        let userChoice = e.currentTarget.id;
        userPattern.push(userChoice);
        // playSound(userChoice);

        checkAnswer(userPattern.length - 1);
    };

    const checkAnswer = (currentLevel) => {
        if (gamePattern[currentLevel] === userPattern[currentLevel]) {
            if (userPattern.length === gamePattern.length) {
                setTimeout(() => {
                    nextSequence();
                }, 1000);
            }
        } else {
            // playSound("wrong");
            alert("Wrong, please restart and then play again");
            startOver();
        }
    };

    const startOver = () => {
        restartHandler();
    };

    useEffect(() => {}, []);
    return (
        <>
            <body style={{ backgroundColor: "#011F3F" }}>
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
                            <GameButton
                                play={playHandler}
                                restart={restartHandler}
                            />
                        </Col>
                        <Col sm="7" className="m-auto">
                            <TheSimonGame playerChoices={playerChoices} />
                        </Col>
                    </Row>
                </Container>
                <MyFooter/>
            </body>

        </>
    );
};

export default SimonGame;
