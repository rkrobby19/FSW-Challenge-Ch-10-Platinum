import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import { Button, Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../components/navbar";
import EditProfileModal from "../components/profile/edit_profile_modal";
import GameHistory from "../components/profile/game_history";
import ProfileCard from "../components/profile/profile_card";
import MyFooter from "../components/footer";
import { updateUserById, uploadProfileImage } from "../utils/user";
import { validateUser } from "../util/validateUser";
import { retrieveUserById } from "../redux/reducer/user";
import { getScoreById } from "../utils/game";
import { retrieveScoreById } from "../redux/reducer/score";

const Profile = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const userData = useSelector((state) => {
        return state.userReducer;
    });

    const scoreData = useSelector((state) => {
        return state.scoreReducer;
    });

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [inputs, setInputs] = useState({
        username: userData.username,
        fullname: userData.fullname,
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

    // * Update user data
    const updateUserData = async () => {
        if (imageFile) {
            const url = await uploadProfileImage(userData.uid, imageFile);
            await updateUserById(userData.uid, inputs, url);
        } else {
            await updateUserById(userData.uid, inputs);
        }
        dispatch(retrieveUserById(userData.uid));
    };

    useEffect(() => {
        if (userData.uid === null) {
            console.log("RETRIEVE DATA");
            const user = validateUser();
            if (user.status === "INVALID") {
                router.push("/");
            } else {
                dispatch(retrieveUserById(user.uid));
                dispatch(retrieveScoreById(user.uid));
            }
        } else {
            console.log("user data exist:" + userData);
        }
    });

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
                            <ProfileCard
                                showModal={handleShow}
                                userData={userData}
                            />

                            {/* insert modal */}
                            <EditProfileModal
                                show={show}
                                handleClose={handleClose}
                                handleOnChange={handleOnChange}
                                handleFileChange={handleFileChange}
                                tempImgUrl={tempImgUrl}
                                updateUserData={updateUserData}
                                userData={userData}
                            />
                        </Container>
                    </Col>
                    <Col sm={8}>
                        <GameHistory
                            userData={userData}
                            scoreData={scoreData}
                        />
                    </Col>
                </Row>
            </Container>
            <MyFooter />
        </>
    );
};

export default Profile;
