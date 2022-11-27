import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MyFooter from "../../components/footer";
import MyNavbar from "../../components/navbar";
import RpsGame from "../../components/rps_game/rps_game";
import { compareChoice, generateComChoice } from "../../utils/rps_game";
import style from "../../styles/Rps.module.css"
import ScoreTable from "../../components/rps_game/score_table";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../redux/reducer/scores_rps";

const RPSGame = () => {
    const [playerBackgroundColor, setPlayerBackgroundColor] = useState({
        kertas: '#9C835F',
        batu: '#9C835F',
        gunting: '#9C835F'
    })

    const [comBackgroundColor, setComBackgroundColor] = useState({
        kertas: '#9C835F',
        batu: '#9C835F',
        gunting: '#9C835F'
    })

    const [isCLick, setIsCLick] = useState(false)
    const [playerChoice, setPlayerChoice] = useState("player")
    const [comChoice, setComChoice] = useState("com")
    const [roundCounter, setRoundCounter] = useState(1)

    const roundsData = useSelector((state) => {
        return state.roundsReducer
    })
    const dispatch = useDispatch()


    const handlingMouseEnter = (event) => {
        setPlayerBackgroundColor({ [event.target.id]: '#C4C4C4' })
    };

    const handlingMouseLeave = (event) => {
        setPlayerBackgroundColor({ [event.target.id]: '#9C835F' })
    };

    const handlingOnClick = (event) => {
        const comChoice = generateComChoice()
        setIsCLick(true)
        setPlayerChoice(event.target.id)
        setComBackgroundColor({ [comChoice]: '#C4C4C4' })
        setComChoice(comChoice)
    };

    const handleNext = () => {
        setComBackgroundColor({ [comChoice]: '#9C835F' })
        setPlayerBackgroundColor({ [playerChoice]: '#9C835F' })
        setComChoice("com")
        setPlayerChoice("player")
        setIsCLick(false)
        setRoundCounter(roundCounter + 1)
    }

    useEffect(() => {
        const result = compareChoice(comChoice, playerChoice)
        dispatch(action.addResult({ round: roundCounter, result: result }))
        dispatch(action.addScore({ round: roundCounter, result: result }))
        if(roundCounter == 3){
            dispatch(action.calculateTotal({ round: roundCounter }))
        }
    }, [comChoice])


    return (
        <>
            <MyNavbar />
            <Row>
                <ScoreTable />
                <RpsGame
                    handlingMouseEnter={handlingMouseEnter}
                    handlingMouseLeave={handlingMouseLeave}
                    playerBackgroundColor={playerBackgroundColor}
                    comBackgroundColor={comBackgroundColor}
                    handlingOnClick={handlingOnClick}
                    isCLick={isCLick}
                    handleNext={handleNext}
                    round={roundCounter}
                />
            </Row>
            <MyFooter/>

        </>
    );
};

export default RPSGame;
