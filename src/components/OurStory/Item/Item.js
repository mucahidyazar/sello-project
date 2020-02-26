import React from "react";

export default function Item(props) {
  return (
    <div className="t-catalog__item">
      <div className="t-catalog__item--top">
        <img src={props.image} alt="Our Story" />
        <div>T-Shirt</div>
      </div>
      <div className="t-catalog__item--bottom">
        <div>Cuffed Beanie</div>
        <div>$10.00</div>
      </div>
    </div>
  );
}
