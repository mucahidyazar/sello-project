import React from "react";
import Item from "./Item/Item";
import ourStoryImage1 from "../../public/png/pampas-grass-1.png";

export default function OurStory() {
  return (
    <section className="our-story-item">
      <div className="our-story__title">
        <span className="our-story__title--item">04</span>
        <span className="our-story__title--item">OUR STORY</span>
      </div>
      <div className="container">
        <div className="our-story-item__body">
          <Item image={ourStoryImage1} />
          <Item image={ourStoryImage1} />
          <Item image={ourStoryImage1} />
        </div>
      </div>
    </section>
  );
}
