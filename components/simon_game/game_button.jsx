import { Button, Container } from "react-bootstrap";

const GameButton = (props) => {
    const { play, restart } = props;
    return (
        <Container className="d-flex justify-content-center">
            {
                props.isPlay ? <Button
                size="lg"
                variant="success"
                onClick={restart}
                className="ms-2"
                style={{ width: "60px", height: "60px" }}
            >
                <i className="fa-solid fa-arrows-rotate"></i>
            </Button> : <Button
                size="lg"
                variant="danger"
                onClick={play}
                className="me-2"
                style={{ width: "60px", height: "60px" }}
            >
                <i className="fa-solid fa-play"></i>
            </Button>
            }

        </Container>
    );
};

export default GameButton;
