import style from "./Score.module.css";
import { Button, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { insertUserScore } from "../../util/scores";
import { validateUser } from "../../util/validateUser";
import { retrieveScoreById, scoreAction } from "../../redux/reducer/scores";
import { connectStorageEmulator } from "firebase/storage";
import { useEffect } from "react";


const ScoreTable = (props) => {
    const roundsData = useSelector((state) => {
        return state.roundsReducer
    })
    
    const scoreData = useSelector((state) => {
        return state.scoreReducer
    })
    const dispatch = useDispatch()

    const handleSave = () => {
        const data = {
            simon: scoreData.simon,
            dummy: scoreData.dummy,
            rps: roundsData.total.score + scoreData.rps
        }
        console.log(scoreData.rps)
        insertUserScore(props.userId, data)
    }

    useEffect(() => {
        console.log("ttes")
    },[])

    return (
        <div>
            <div class={style.header}>
                <img src="/logo 1.png" alt="" class={style.logo} />
                <h1 class={style.header_text}>ROCK PAPER SCISSORS</h1>
            </div>
            <Card className={style.score}>
                <Card.Body>
                    <Card.Title>Your Score</Card.Title>

                    <Table
                        hover
                        className="text-start"
                        style={{ width: "80%", margin: "auto" }}
                    >
                        <thead>
                            <tr>
                                <th>Round</th>
                                <th>Result</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{roundsData[1].result}</td>
                                <td>{roundsData[1].score}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{roundsData[2].result}</td>
                                <td>{roundsData[2].score}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{roundsData[3].result}</td>
                                <td>{roundsData[3].score}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>{roundsData.total.result}</td>
                                <td>{roundsData.total.score}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Button className="mt-3" onClick={() => {handleSave()}}>Save</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ScoreTable;