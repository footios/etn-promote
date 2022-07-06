/* eslint-disable @typescript-eslint/no-var-requires */
import React, { FC } from "react";
import { infoTextGR, infoTextEN } from "../constatnts";
import "./../styles/sass/pages/info/info.css";

const appleGR = require("../assets/images/AppStoreGR.png");
const appleEN = require("../assets/images/AppStoreEN.png");
const androidEN = require("../assets/images/google-play-badgeEN.png");
const androidGR = require("../assets/images/google-play-badgeGR.png");
const gr9 = require("../assets/images/9gr.jpeg");
const gr10 = require("../assets/images/10gr.jpeg");
const en9 = require("../assets/images/9en.jpeg");
const en10 = require("../assets/images/10en.jpeg");
interface Props {
  language: string;
}
const Info: FC<Props> = ({ language }) => {
  let apple = appleGR;
  let android = androidGR;
  if (language === "EN") {
    apple = appleEN;
    android = androidEN;
  }

  return (
    <article className="info" id="info">
      <img
        className="phone-screen"
        src={language === "GR" ? gr9 : en9}
        alt="screen shot of phone"
        width={300}
        height={600}
      />

      <article className="info-text">
        <p>{language === "GR" ? infoTextGR : infoTextEN}</p>

        <section className="footer-links">
          <div>
            <a
              href="https://apps.apple.com/gr/app/in-this-you-conquer/id1602477321"
              target="_blank"
              rel="noreferrer"
            >
              <img src={apple} alt="App store badge" />
            </a>
          </div>
          <a
            id="link"
            href="https://app.websitepolicies.com/policies/view/Z7EH1eVD"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Privacy Policy</h2>
          </a>
          <div>
            <a id="link" href="http://" target="_blank" rel="noreferrer">
              <img
                src={android}
                alt="Google play badge"
                width={140}
                height={60}
              />
            </a>
          </div>
        </section>
      </article>

      <img
        className="phone-screen"
        src={language === "GR" ? gr10 : en10}
        alt="screen shot of phone"
        width={300}
        height={600}
      />
    </article>
  );
};

export default Info;
