import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// images
import asset1 from "../../../images/blog_chrisstein.jpg";
import asset2 from "../../../images/blog_rodrigoygabriela.jpg";
import asset3 from "../../../images/blog_zakkwylde.jpg";

// styles
import s from "./carousel.module.css";

const MainCarousel = () => (
  <Carousel
    showStatus={false}
    showThumbs={false}
    autoPlay={true}
    infiniteLoop={true}
    className={s.carousel}
  >
    <div>
      <img src={asset1} alt="asset1" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={asset2} alt="asset1" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src={asset3} alt="asset1" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);

export default MainCarousel;
