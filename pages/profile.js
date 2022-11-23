import { useState } from "react";
import Head from "next/head";
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
            <Head>
                <title>Profile</title>
                {/* Font Awesome  */}
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v6.1.2/css/all.css"
                    integrity="sha384-fZCoUih8XsaUZnNDOiLqnby1tMJ0sE7oBbNk2Xxf5x8Z4SvNQ9j83vFMa/erbVrV"
                    crossOrigin="anonymous"
                />
            </Head>
            <MyNavbar />

            <Container fluid="md" bg="dark" className="mt-5">
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
