import { Container, Carousel } from "react-bootstrap";
import carouselimage from "../../src/download.jpg";
import desk from "../../src/desk.jpeg";
import studying from "../../src/studying.jpg";
import desk2 from "../../src/desk2.jpg";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Welcome</h1>
      </div>

      <Carousel>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselimage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item>
          <img className="d-block w-100" src={desk2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Need Study Materials?</h3>
            <p>Pick up your late night exam prep materials</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={studying} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <ProductCarousel />
    </Container>
  );
};
export default Home;
