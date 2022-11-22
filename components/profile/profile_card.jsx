import { Button, Card } from "react-bootstrap";

const ProfileCard = (props) => {
    const { showModal } = props;
    return (
        <Card>
            <Card.Body className="text-center">
                <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt=""
                    style={{
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                        boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                />

                <Card.Title>
                    <h4 className="my-inline-display">Fullname</h4>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-secondary ">
                    <h5>@Username</h5>
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                    <h6 className="my-inline-display">user.email@gmail.com</h6>
                </Card.Subtitle>

                <Button variant="primary" onClick={showModal}>
                    Edit Profile
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;
