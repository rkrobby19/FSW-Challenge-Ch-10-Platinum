import MyCard from "../components/card";
import MyCarousel from "../components/carousel";
import MyNavbar from "../components/navbar";
import { Container } from "react-bootstrap";
import MyAbout from "../components/about";
import MyFooter from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { validateUser } from "../util/validateUser";
import { useEffect } from "react";
import { retrieveUserById } from "../redux/reducer/user";
import { retrieveScoreById } from "../redux/reducer/score";

export default function Home() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => {
        return state.userReducer;
    });
    const scoreData = useSelector((state) => {
        return state.scoreReducer;
    });
    useEffect(() => {
        if (userData.uid === null) {
            console.log("RETRIEVE DATA");
            const user = validateUser();
            if (user.status === "VALID") {
                dispatch(retrieveUserById(user.uid));
                dispatch(retrieveScoreById(user.uid));
            }
            console.log("data get");
        } else {
            console.log("user data exist:" + userData);
        }
    }, []);

    return (
        <>
            <MyNavbar />
            <MyCarousel />
            <Container>
                <MyCard scoreData={scoreData} />
            </Container>
            <MyAbout />
            <MyFooter />
        </>
    );
}
