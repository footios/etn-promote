/* eslint-disable @typescript-eslint/no-var-requires */
import React, { FC } from "react";
import { infoTextGR, infoTextEN } from "../constatnts";
import "./../styles/sass/components/info/info.css";

const appleGR = require("../assets/images/AppStoreGR.png");
const appleEN = require("../assets/images/AppStoreEN.png");
const androidEN = require("../assets/images/google-play-badgeEN.png");
const androidGR = require("../assets/images/google-play-badgeGR.png");
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
      <article className="info-text">
        <p>{language === "GR" ? infoTextGR : infoTextEN}</p>
        <section className="install">
          <a href="http://" target="_blank" rel="noreferrer">
            <img src={apple} alt="App store badge" />
          </a>
          <a
            href="https://app.websitepolicies.com/policies/view/Z7EH1eVD"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Privacy policy</h2>
          </a>
          <a href="http://" target="_blank" rel="noreferrer">
            <img
              src={android}
              alt="Google play badge"
              width={140}
              height={60}
            />
          </a>
        </section>
      </article>
    </article>
  );
};

export default Info;
