import React from "react";
import Item from "./Item/Item";
import FeaturedItemImage1 from "../../public/png/image1xxl4-420x540.png";

export default function FeaturedItem() {
  return (
    <section className="featured-item">
      <div className="featured__title">
        <span className="featured__title--item">03</span>
        <span className="featured__title--item">FEATURED ITEM</span>
      </div>
      <div className="container">
        <div className="featured-item__body">
          <Item image={FeaturedItemImage1} />
          <Item image={FeaturedItemImage1} />
          <Item image={FeaturedItemImage1} />
          <Item image={FeaturedItemImage1} />
          <Item image={FeaturedItemImage1} />
          <Item image={FeaturedItemImage1} />
        </div>
      </div>
    </section>
  );
}
