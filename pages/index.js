import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            <Row className="text-center align-center justify-content-center my-5" >
                <Col md={3}>
                    <MyCard/>
                </Col>    
                <Col md={3}>
                    <MyCard/>
                </Col>    
                <Col md={3}>
                    <MyCard/>
                </Col> 
                <Col md={3}>
                    <MyCard/>
                </Col>                
            </Row>
            </Container>
            <MyAbout/>
            <MyFooter/>
        </>
    );
}
