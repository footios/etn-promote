/* eslint-disable @typescript-eslint/no-var-requires */
import React, { Dispatch, FC, SetStateAction } from "react";
import "../styles/sass/components/navbar/navbar.css";

interface Props {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}
const Navbar: FC<Props> = ({ language, setLanguage }) => {
  return (
    <div id="navbar">
      <a className="active" href="javascript:void(0)">
        {language === "GR" ? "Ἕν τούτῳ Νίκα" : "In this you conquer"}
      </a>
      <a href="javascript:void(0)">
        {language === "GR" ? "Πληροφορίες" : "Info"}
      </a>
      <a href="javascript:void(0)">
        {language === "GR" ? "Ἐγκατάσταση" : "Install"}
      </a>
      <div className="languages-container">
        <div
          onClick={() => setLanguage("GR")}
          className={`language ${language === "GR" ? "active" : ""} `}
        >
          <img
            alt="logo"
            width={55}
            height={30}
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GR.svg"
          />
        </div>
        <div
          onClick={() => setLanguage("GB")}
          className={`language ${language === "GB" ? "active" : ""} `}
        >
          <img
            alt="logo"
            width={55}
            height={30}
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
