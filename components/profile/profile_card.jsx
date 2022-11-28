import style from "./ProfileCard.module.css";
import { Button, Card } from "react-bootstrap";

const ProfileCard = (props) => {
    const { showModal, userData } = props;
    return (
        <Card className={style.card}>
            <Card.Body className="text-center">
                <img
                    src={userData.profileImg}
                    alt=""
                    className={style.profilePic}
                />
                <Card.Title>
                    <i className="fa-solid fa-user "></i>
                    {"   "}
                    <h4 className="d-inline">{userData.fullname}</h4>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-secondary ">
                    <h5>@{userData.username}</h5>
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                    <i className="fa-solid fa-envelope"></i>
                    {"   "}
                    <h6 className="d-inline">{userData.email}</h6>
                </Card.Subtitle>

                <Button variant="primary" onClick={showModal} className="mt-1">
                    <i className="fa-solid fa-user-pen"></i> {"   "}Edit
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;
