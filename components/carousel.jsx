import Carousel from "react-bootstrap/Carousel";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://telset.id/wp-content/uploads/2020/09/21-9.jpg"
          alt="First slide"
          width="100%"
          height="100%"
          className="border border-2 rounded-5 p-5"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://telset.id/wp-content/uploads/2020/09/21-9.jpg"
          alt="Second slide"
          width="100%"
          height="100%"
          className="border border-2 rounded-5 p-5"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://telset.id/wp-content/uploads/2020/09/21-9.jpg"
          alt="Third slide"
          width="100%"
          height="100%"
          className="border border-2 rounded-5 p-5"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
