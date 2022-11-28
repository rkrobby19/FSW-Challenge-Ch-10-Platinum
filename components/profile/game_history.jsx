import { Container, Table } from "react-bootstrap";

const GameHistory = (props) => {
    const { userData, scoreData } = props;
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
                        <td>Rock-paper-scissor</td>
                        <td className="text-center">
                            {scoreData.rps ? scoreData.rps : "Not played"}
                        </td>
                    </tr>
                    <tr>
                        <td>Simon</td>
                        <td className="text-center">
                            {scoreData.simon ? scoreData.simon : "Not Played"}
                        </td>
                    </tr>
                    <tr>
                        <td>Dummy</td>
                        <td className="text-center">
                            {scoreData.dummy ? scoreData.dummy : "Not played"}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
export default GameHistory;
