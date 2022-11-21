import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MyCard = () => {
  return (
    <Card bg="light" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=854&resize=1&w=640"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-dark">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
