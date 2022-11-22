import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../components/navbar";
import EditProfileModal from "../components/profile/edit_profile_modal";
import GameHistory from "../components/profile/game_history";
import ProfileCard from "../components/profile/profile_card";

const Profile = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <MyNavbar />

            <Container fluid="md" bg="dark" className="my-mt">
                <Row>
                    <Col sm={4}>
                        <Container>
                            <ProfileCard showModal={handleShow} />

                            {/* insert modal */}
                            <EditProfileModal
                                show={show}
                                handleClose={handleClose}
                            />
                        </Container>
                    </Col>
                    <Col sm={8}>
                        <Container></Container>

                        <GameHistory />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Profile;
