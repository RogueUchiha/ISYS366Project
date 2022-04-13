import { Container, Carousel } from "react-bootstrap";
import carouselimage from "../../src/download.jpg";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Welcome</h1>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselimage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselimage}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselimage}
            alt="Third slide"
          />

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
