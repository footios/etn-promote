import React from "react";
import "../styles/components/navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <a className="active" href="javascript:void(0)">
        Home
      </a>
      <a href="javascript:void(0)">News</a>
      <a href="javascript:void(0)">Contact</a>
    </div>
  );
};

export default Navbar;
