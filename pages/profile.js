import { useState } from "react";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../components/navbar";
import EditProfileModal from "../components/profile/edit_profile_modal";
import GameHistory from "../components/profile/game_history";
import ProfileCard from "../components/profile/profile_card";
import MyFooter from "../components/footer";

const Profile = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [inputs, setInputs] = useState({
        username: "",
        fullname: "",
        email: "",
    });

    const handleOnChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;

        setInputs((prev) => {
            prev[name] = value;

            return prev;
        });
    };

    // * Setup for user upload image
    const [imageFile, setImageFile] = useState();
    const [tempImgUrl, setTempImgUrl] = useState(
        "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
    );
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        if (file) {
            const reader = new FileReader();
            setImageFile(file);
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setTempImgUrl(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

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
                                handleOnChange={handleOnChange}
                                handleFileChange={handleFileChange}
                                tempImgUrl={tempImgUrl}
                            />
                        </Container>
                    </Col>
                    <Col sm={8}>
                        <Container></Container>

                        <GameHistory />
                    </Col>
                </Row>
            </Container>
            <MyFooter />
        </>
    );
};

export default Profile;
