/* eslint-disable @typescript-eslint/no-var-requires */
import React, { FC } from "react";
import { Carousel } from "react-bootstrap";

const image1 = require("../assets/images/slide1.jpeg");
const image2 = require("../assets/images/slide2.jpeg");
const image3 = require("../assets/images/slide3.jpeg");
const image1en = require("../assets/images/slide1en.jpeg");
const image2en = require("../assets/images/slide2en.jpeg");
const image3en = require("../assets/images/slide3en.jpeg");
interface Props {
  language: string;
}
const HeroSlider: FC<Props> = ({ language }) => {
  return (
    <div id="heroSlider">
      {language === "GR" ? (
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={image1} alt="First slide" />
            {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={image2} alt="Second slide" />
            {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      ) : (
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={image1en} alt="First slide" />
            {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={image2en} alt="Second slide" />
            {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3en} alt="Third slide" />
            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
};

export default HeroSlider;
