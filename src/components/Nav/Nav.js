import React from "react";
import headerImage from "../../public/png/slider3-element1-1.png";

export default function Nav() {
  return (
    <div className="container">
      <div id="nav">
        <div className="nav__logo">
          SELLO
          <div className="nav__logo--dot"></div>
        </div>
        <ul className="nav__menu">
          <li className="nav__menu--item nav__menu--active">
            <a href="/home">Home</a>
          </li>
          <li className="nav__menu--item">
            <a href="/product">Product</a>
          </li>
          <li className="nav__menu--item">
            <a href="/blog">blog</a>
          </li>
          <li className="nav__menu--item">
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <img src={headerImage} alt="Nav Image" />
      </div>
    </div>
  );
}
