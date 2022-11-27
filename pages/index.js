import MyCard from "../components/card";
import MyCarousel from "../components/carousel";
import MyNavbar from "../components/navbar";
import { Container } from 'react-bootstrap';
import MyAbout from '../components/about';
import MyFooter from '../components/footer';

export default function Home() {
    return (
        <>
            <MyNavbar />            
            <MyCarousel/>
            <Container >
            <MyCard/>
            </Container>
            <MyAbout/>
            <MyFooter/>
        </>
    );
}
