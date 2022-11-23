import style from "./Score.module.css";
import { Card, Table } from "react-bootstrap";

const ScoreTable = () => {
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
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Level</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Score</td>
                            <td>30</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default ScoreTable;
