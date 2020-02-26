import React from "react";

export default function OurStoryItem(props) {
  return (
    <div className="t-catalog__item">
      <div className="t-catalog__item--top">
        <img src={props.image} alt="Trending Image" />
        <div>T-Shirt</div>
      </div>
      <div className="t-catalog__item--bottom">
        <div>Cuffed Beanie</div>
        <div>$10.00</div>
      </div>
    </div>
  );
}
