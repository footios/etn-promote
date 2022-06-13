/* eslint-disable @typescript-eslint/no-var-requires */
import React, { FC } from "react";
import { Carousel } from "react-bootstrap";

let image1 = require("../assets/images/slide1.jpeg");
let image2 = require("../assets/images/slide2.jpeg");
let image3 = require("../assets/images/slide3.jpeg");
const image1en = require("../assets/images/slide1en.jpeg");
const image2en = require("../assets/images/slide2en.jpeg");
const image3en = require("../assets/images/slide3en.jpeg");
interface Props {
  language: string;
}
const HeroSlider: FC<Props> = ({ language }) => {
  if (language === "EN") {
    image1 = image1en;
    image2 = image2en;
    image3 = image3en;
  }

  return (
    <div id="heroSlider">
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
    </div>
  );
};

export default HeroSlider;
