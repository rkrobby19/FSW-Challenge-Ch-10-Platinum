import { Container, Table } from "react-bootstrap";

const GameHistory = () => {
    return (
        <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr className="text-center">
                        <th>Game</th>
                        <th>Win</th>
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
