import { Container, Table } from "react-bootstrap";

const GameHistory = (props) => {
    const { userData } = props;
    return (
        <Container>
            <h2 style={{ color: "white" }}>
                Lets Play The Game @{userData.username}
            </h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr className="text-center">
                        <th>Game</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Simon</td>
                        <td className="text-center">20</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
export default GameHistory;
