/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { FC } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/sass/pages/heroSlider/heroSlider.css";

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
            <Carousel.Caption className="caption">
              <h2>Μάθε τα τῆς Πίστεώς σου!</h2>
              <h3>
                "Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ
                Λόγος." (Ἰωάν. 1, 1)
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <Carousel.Caption className="caption">
              <h2>Διάβασε τά Ἱερά Κείμενα!</h2>
              <h3>"Ἆρά γε γινώσκεις ἃ ἀναγινώσκεις" (Πραξ. 8,30)</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <Carousel.Caption className="caption">
              <h2>Ὁ Χριστός σέ ἀγαπάει!</h2>
              <h3>
                "Ὁ ζητῶν εὑρίσκει καὶ τῷ κρούοντι ἀνοιγήσεται" (Ματ. 7, 8)
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : (
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={image1en} alt="First slide" />
            <Carousel.Caption className="caption">
              <h2>Learn about your Faith!</h2>
              <h3>
                "In the beginning was the Word, and the Word was with God, and
                the Word was God." (John. 1, 1)
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={image2en} alt="Second slide" />
            <Carousel.Caption className="caption">
              <h2>Read the Holy Scriptures!</h2>
              <h3>"Do you understand what you are reading?" (Acts. 8, 30)</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3en} alt="Third slide" />
            <Carousel.Caption className="caption">
              <h2>Jesus Loves you!</h2>
              <h3>
                "He who seeks finds; and to him who knocks, the door will be
                opened." (Mat. 7, 8)
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
};

export default HeroSlider;
