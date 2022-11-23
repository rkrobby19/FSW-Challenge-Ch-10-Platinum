import style from "./ProfileCard.module.css";
import { Button, Card } from "react-bootstrap";

const ProfileCard = (props) => {
    const { showModal } = props;
    return (
        <Card className={style.card}>
            <Card.Body className="text-center">
                <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt=""
                    className={style.profilePic}
                />

                <Card.Title>
                    <i class="fa-solid fa-user "></i>
                    {"   "}
                    <h4 className="d-inline">Fullname</h4>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-secondary ">
                    <h5>@Username</h5>
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                    <i class="fa-solid fa-envelope"></i>
                    {"   "}
                    <h6 className="d-inline">user.email@gmail.com</h6>
                </Card.Subtitle>

                <Button variant="primary" onClick={showModal} className="mt-1">
                    <i class="fa-solid fa-user-pen"></i> {"   "}Edit
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;
