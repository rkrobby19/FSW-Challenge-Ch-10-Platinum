import { data } from "jquery";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const GameHistory = () => {
  const userData = useSelector((state) => {
    return state.userReducer;
  });

  //   useEffect(() => {
  //     if (userData.uid === null) {
  //       console.log("RETRIEVE DATA");
  //       const user = validateUser();
  //       if (user.status === "INVALID") {
  //         router.push("/");
  //       } else {
  //         dispatch(retrieveUserById(user.uid));
  //       }
  //     }
  //   }, []);

  return (
    <Container>
      <h1>letx play {userData.fullname}</h1>
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
