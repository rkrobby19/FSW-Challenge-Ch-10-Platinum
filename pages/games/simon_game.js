import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import $ from "jquery";
import style from "../../styles/Simon.module.css";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../components/navbar";
import MyFooter from "../../components/footer";
import GameButton from "../../components/simon_game/game_button";
import ScoreTable from "../../components/simon_game/score_table";
import TheSimonGame from "../../components/simon_game/simon_game";
import { useSelector, useDispatch } from "react-redux";
import { simonAction } from "../../redux/reducer/simon";
import { validateUser } from "../../util/validateUser";
import { retrieveUserById } from "../../redux/reducer/user";
import { retrieveScoreById } from "../../redux/reducer/scores";

const SimonGame = () => {
    const router = useRouter();
    const userData = useSelector((state) => {
        return state.userReducer;
    });

    // * State
    const [play, setPlay] = useState(false);
    const [userPattern, setUserPattern] = useState([]);
    const [gamePattern, setGamePattern] = useState([]);
    const [user, setUser] = useState({})

    // * Redux
    const currentLvl = useSelector((state) => state.simonReducer.level);
    const currentScore = useSelector((state) => state.simonReducer.score);
    const dispatch = useDispatch();
    const addLevel = () => {
        dispatch(simonAction.increaseLevel());
    };
    const resetLevel = () => {
        dispatch(simonAction.restartLevel());
    };
    const resetScore = () => {
        dispatch(simonAction.restartScore())
    }
    const addRound = () => {
        dispatch(simonAction.increaseRound());
    };
    const addScore = () => {
        dispatch(simonAction.addScore());
    };

    let buttonColours = ["red", "blue", "green", "yellow"];

    const playHandler = () => {
        setPlay(true);
    };
    const restartHandler = () => {
        setGamePattern([]);
        setUserPattern([]);
        setPlay(false);
        resetLevel();
        resetScore();
        console.log("game:" + gamePattern);
        console.log("player:" + userPattern);
        console.log(play);
    };

    const nextSequence = () => {
        console.log(play);
        if (play === true) {
            console.log(`play`);
            setUserPattern([]);
            addLevel();
            let randomNumber = Math.floor(Math.random() * 4);
            let randomChosenColour = buttonColours[randomNumber];
            setGamePattern((prevArray) => [...prevArray, randomChosenColour]);
            console.log(gamePattern);
            // playRound(gamePattern);
        } else {
            console.log(`not playing`);
        }
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
        if (e) {
            let userChoice = e.currentTarget.id;
            setUserPattern((prevArray) => [...prevArray, userChoice]);
            console.log(userPattern);
            // playSound(userChoice);

            // checkAnswer(userPattern.length - 1);
        }
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
            addScore();
            alert("Wrong, please restart and then play again");
            // restartHandler();
        }
    };

    useEffect(() => {
        nextSequence();
        console.log(play)
    }, [play]);

    useEffect(() => {
        playRound(gamePattern)
    },[gamePattern])

    useEffect(() => {
        checkAnswer(userPattern.length - 1);
    },[userPattern])

    useEffect(() => {
        const data = validateUser()
        setUser(data)
        if(data.status == "INVALID"){
            router.push("/")
        }
    },[])

    useEffect(() => {
        dispatch(retrieveScoreById(user.uid))
    },[currentScore])

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
                        <ScoreTable
                            score={currentScore}
                            level={currentLvl}
                            userId={user.uid}
                        />
                        <GameButton
                            isPlay={play}
                            play={playHandler}
                            restart={restartHandler}
                        />
                    </Col>
                    <Col sm="7" className="m-auto">
                        <TheSimonGame playerChoices={playerChoices} />
                    </Col>
                </Row>
            </Container>
            <MyFooter />
        </>
    );
};

export default SimonGame;
