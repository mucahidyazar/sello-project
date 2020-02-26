import React from "react";
import trendingImage1 from "../../public/png/Bobbi_Chunky_Pom_Beanie-5.png";
import trendingImage2 from "../../public/png/Bobbi_Chunky_Pom_Beanie-7.png";
import trendingImage3 from "../../public/png/Bobbi_Chunky_Pom_Beanie-9.png";
import trendingImage4 from "../../public/png/Bobbi_Chunky_Pom_Beanie-6.png";
import trendingImage5 from "../../public/png/Bobbi_Chunky_Pom_Beanie-8.png";
import trendingImage6 from "../../public/png/Bobbi_Chunky_Pom_Beanie-10.png";
import trendingImage7 from "../../public/png/Bobbi_Chunky_Pom_Beanie-7.png";
import trendingImage8 from "../../public/png/Bobbi_Chunky_Pom_Beanie-8.png";
import trendingImage9 from "../../public/png/Bobbi_Chunky_Pom_Beanie-9.png";
import trendingImage10 from "../../public/png/Bobbi_Chunky_Pom_Beanie-10.png";

export default function Trending() {
  return (
    <div className="container">
      <section className="trending">
        <div className="trending__header">
          <ul className="trending__header--right">
            <li className="nav__menu--item nav__menu--active">
              <a href="#">T-Shirt</a>
            </li>
            <li className="nav__menu--item">
              <a href="#">Pants</a>
            </li>
            <li className="nav__menu--item">
              <a href="#">Shoe</a>
            </li>
            <li className="nav__menu--item">
              <a href="#">Jacket</a>
            </li>
            <li className="nav__menu--item">
              <a href="#">Fashion</a>
            </li>
          </ul>
          <div className="trending__header--left">ALL PRODUCTS</div>
        </div>
        <div className="trending__body">
          <div className="trending__title">
            <span className="trending__title--item">02</span>
            <span className="trending__title--item">Trending</span>
          </div>
          <div className="t-catalog">
            <div className="t-catalog__item">
              <div className="t-catalog__item--top">
                <img src={trendingImage1} alt="Trending Image" />
                <div>T-Shirt</div>
              </div>
              <div className="t-catalog__item--bottom">
                <div>Cuffed Beanie</div>
                <div>$10.00</div>
              </div>
            </div>

            <div className="t-catalog__item">
              <div className="t-catalog__item--top">
                <img src={trendingImage2} alt="Trending Image" />
                <div>T-Shirt</div>
              </div>
              <div className="t-catalog__item--bottom">
                <div>Cuffed Beanie</div>
                <div>$10.00</div>
              </div>
            </div>

            <div className="t-catalog__item">
              <div className="t-catalog__item--top">
                <img src={trendingImage3} alt="Trending Image" />
                <div>T-Shirt</div>
              </div>
              <div className="t-catalog__item--bottom">
                <div>Cuffed Beanie</div>
                <div>$10.00</div>
              </div>
            </div>

            <div className="t-catalog__item">
              <div className="t-catalog__item--top">
                <img src={trendingImage4} alt="Trending Image" />
                <div>T-Shirt</div>
              </div>
              <div className="t-catalog__item--bottom">
                <div>Cuffed Beanie</div>
                <div>$10.00</div>
              </div>
            </div>

            <div className="t-catalog__item">
              <div className="t-catalog__item--top">
                <img src={trendingImage5} alt="Trending Image" />
                <div>T-Shirt</div>
              </div>
              <div className="t-catalog__item--bottom">
                <div>Cuffed Beanie</div>
                <div>$10.00</div>
              </div>
            </div>

            <div className="t-catalog__item">
              <div className="t-catalog__item--top">
                <img src={trendingImage6} alt="Trending Image" />
                <div>T-Shirt</div>
              </div>
              <div className="t-catalog__item--bottom">
                <div>Cuffed Beanie</div>
                <div>$10.00</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
