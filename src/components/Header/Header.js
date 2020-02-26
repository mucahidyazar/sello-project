import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__body">
          <SectionTitle number="01" title="INTRO" />
          <div className="header__body--title heading-4">
            SALE OFF! UP TO 70%
          </div>
          <div className="header__body--body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div className="header__body--button btn-sm">
            <a href="/">Shop Now</a>
          </div>
        </div>
      </div>
    </header>
  );
}
