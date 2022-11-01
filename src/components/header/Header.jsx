import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/mig.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Jakob Semajer-Gknjnaric</h1>
        <h5>Multi Media Designer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
