import style from "./Score.module.css";
import { Button, Card, Table } from "react-bootstrap";

const ScoreTable = (props) => {
    const { round, level, score } = props;
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
                            <td>Round</td>
                            <td>{round}</td>
                        </tr>
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

                <Button className="mt-3">Save</Button>
            </Card.Body>
        </Card>
    );
};

export default ScoreTable;
