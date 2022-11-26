import Carousel from "react-bootstrap/Carousel";
import style from "../styles/home.module.css";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className={style.carousel_slide}
          src="https://telset.id/wp-content/uploads/2020/09/21-9.jpg"
          alt="First slide"
          width="100%"
          height="100%"
        />
        <Carousel.Caption className={style.carousel_header}>
          <h1>LET'S PLAYED THE GAME </h1>
          <p>have fun every with new journey</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className={style.carousel_slide}
          src="https://wallpaperaccess.com/full/4495322.jpg"
          alt="Second slide"
          width="100%"
          height="100%"
        />
        <Carousel.Caption className={style.carousel_header}>
          <h1>MORE POWERFULL EXPERIENCES </h1>
          <p>only width your hand then all will be winner.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.carousel_slide}
          src="https://i.pinimg.com/originals/a2/94/b5/a294b593769b6bf61b55c152032e7459.jpg"
          alt="Third slide"
          width="100%"
          height="100%"
        />
        <Carousel.Caption className={style.carousel_header}>
          <h1>MAKE TIME FOR YOUR GAME </h1>
          <p>focus at finger on keybord and mouse.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
