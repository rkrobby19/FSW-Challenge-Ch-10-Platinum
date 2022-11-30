import { Container, Table } from "react-bootstrap";
import style from "../profile/ProfileCard.module.css";

const GameHistory = (props) => {
  const { userData, scoreData } = props;
  return (
    <Container className={style.font}>
      <h2 style={{ color: "white" }}>
        Lets Play The Game @<span>{userData.username} </span>
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
