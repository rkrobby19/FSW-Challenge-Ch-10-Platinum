import style from "./Score.module.css";
import { Button, Card, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const ScoreTable = () => {
    const roundsData = useSelector((state) => {
        return state.roundsReducer
    })
    return (
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

                <Button className="mt-3">Save</Button>
            </Card.Body>
        </Card>
    );
};

export default ScoreTable;