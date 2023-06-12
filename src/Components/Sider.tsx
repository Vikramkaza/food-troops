import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/slider/1.png";
import image2 from "../assets/slider/1.png";
import image3 from "../assets/slider/1.png";
import "./Slider.css";
function Sider() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Carousel style={{ marginTop: "159px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-image"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="corousel-caption">
            <h2>Empowering Society</h2>
            <h2>Through Science</h2>
            <br />

            <p>Food Lab is one point solution for all</p>
            <p>Saftey Needs</p>
            <p>
              <a href="">Get Started</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-image"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption className="corousel-caption">
            <h2>Illuminating Minds</h2>
            <h2>Empowering The World</h2>
            <br />

            <p>Food Lab is one point solution for all</p>
            <p>Saftey Needs</p>
            <p>
              <a href="">Get Started</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-image"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className="corousel-caption">
            <h2>Science Empowers</h2>
            <h2>Innovation Transforms</h2>
            <br />

            <p>Food Lab is one point solution for all</p>
            <p>Saftey Needs</p>
            <p>
              <a href="">Get Started</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Sider;
