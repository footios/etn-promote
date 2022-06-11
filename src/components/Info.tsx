/* eslint-disable @typescript-eslint/no-var-requires */
import React, { FC } from "react";
import { infoTextGR, infoTextEN } from "../constatnts";
import "./../styles/sass/components/info/info.css";

interface Props {
  language: string;
}
const Info: FC<Props> = ({ language }) => {
  return (
    <article className="info" id="info">
      <article className="info-text">
        <p>{language === "GR" ? infoTextGR : infoTextEN}</p>
      </article>
    </article>
  );
};

export default Info;
