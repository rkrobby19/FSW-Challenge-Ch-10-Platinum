import style from "./Score.module.css";
import { Button, Card, Table } from "react-bootstrap";
import { insertUserScore } from "../../util/scores";
import { useSelector } from "react-redux";

const ScoreTable = (props) => {
    const scoreData = useSelector((state) => {
        return state.scoreReducer
    })

    const handleSave = () => {
        const data = {
            dummy: scoreData.dummy + props.score,
            rps: scoreData.rps,
            simon: scoreData.simon
        }
        console.log(scoreData.dummy)
        insertUserScore(props.userId, data)
    }

    return (
        <Card className={style.score}>
            <Card.Body>
                <Card.Title>Your Score</Card.Title>

                <Table
                    hover
                    className="text-start"
                    style={{ width: "80%", margin: "auto" }}
                >
                    <tbody>
                        <tr>
                            <td>Score</td>
                            <td>{props.score}</td>
                        </tr>
                    </tbody>
                </Table>

                <Button className="mt-3" onClick={() => {handleSave()}}>Save</Button>
            </Card.Body>
        </Card>
    );
};

export default ScoreTable;
