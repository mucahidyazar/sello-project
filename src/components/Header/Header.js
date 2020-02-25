import React from "react";

export default function Header() {
  return (
    <header>
      <div className="section__title">
        <span className="section__title--item">01</span>
        <span className="section__title--item">Intro</span>
      </div>
      <div className="container">
        <div className="header__body">
          <div className="header__body--title heading-4">
            SALE OFF! UP TO 70%
          </div>
          <div className="header__body--body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div className="header__body--button">Shop Now</div>
        </div>
      </div>
    </header>
  );
}
