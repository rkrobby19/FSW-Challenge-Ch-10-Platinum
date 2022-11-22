import { Button, Container } from "react-bootstrap";

const GameButton = () => {
    return (
        <Container>
            <Button
                size="lg"
                variant="danger"
                // onClick={play}
                className="me-2"
                style={{ width: "60px", height: "60px" }}
            >
                <i className="fa-solid fa-play"></i>
            </Button>

            <Button
                size="lg"
                variant="success"
                // onClick={restart}
                className="ms-2"
                style={{ width: "60px", height: "60px" }}
            >
                <i className="fa-solid fa-arrows-rotate"></i>
            </Button>
        </Container>
    );
};

export default GameButton;
