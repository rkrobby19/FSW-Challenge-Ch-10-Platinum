import { Container } from "react-bootstrap";
import style from "./Game.module.css";

const TheSimonGame = () => {
    return (
        <Container className="d-flex justify-content-center">
            <div className="row d-flex justify-content-end">
                <div
                    type="button"
                    id="green"
                    className={style.buttonGreen}
                    // onClick={playerChoices}
                ></div>
                <div
                    type="button"
                    id="red"
                    className={style.buttonRed}
                    // onClick={playerChoices}
                ></div>
            </div>
            <div className="row d-flex justify-content-start">
                <div
                    type="button"
                    id="yellow"
                    className={style.buttonYellow}

                    // onClick={playerChoices}
                ></div>
                <div
                    type="button"
                    id="blue"
                    className={style.buttonBlue}

                    // onClick={playerChoices}
                ></div>
            </div>
        </Container>
    );
};

export default TheSimonGame;
