import style from "./Score.module.css";
import { Button, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { insertUserScore } from "../../util/scores";

const ScoreTable = (props) => {
    const { round, level, score } = props;

    const scoreData = useSelector((state) => {
        return state.scoreReducer;
    });
    const dispatch = useDispatch();

    const handleSave = () => {
        const data = {
            dummy: scoreData.dummy,
            rps: scoreData.rps,
            simon: score + scoreData.simon
        };
        console.log(scoreData.simon);
        insertUserScore(props.userId, data);
    };
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
                            <td>Level</td>
                            <td>{level}</td>
                        </tr>
                        <tr>
                            <td>Score</td>
                            <td>{score}</td>
                        </tr>
                    </tbody>
                </Table>

                <Button className="mt-3" onClick={() => {handleSave()}}>
                    Save
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ScoreTable;
