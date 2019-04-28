import React from "react";
import { Carousel } from "react-responsive-carousel";

// styles
import "./carousel.css";

const MainCarousel = () => (
  <Carousel
    showStatus={false}
    showThumbs={false}
    autoPlay={true}
    infiniteLoop={true}
    interval={7000}
  >
    <div>
      <img
        src={process.env.PUBLIC_URL + "/images/carousel/1.jpg"}
        alt="asset1"
      />
      <p className="legend">
        Though it’s more commonly known as an insult to offend and degrade, in
        Missy Elliott’s capable hands, “bitch” means something far more
        positive: a freedom of expression and a symbol of empowerment.
      </p>
    </div>
    <div>
      <img
        src={process.env.PUBLIC_URL + "/images/carousel/2.jpg"}
        alt="asset1"
      />
      <p className="legend">
        Blackpink brought some fresh energy to The Late Late Show With James
        Corden when they were the guests last night (April 18). Their hazy,
        sexual energy was on full display when they performed "Kill This Love"
        from their new EP of the same name.
      </p>
    </div>
    <div>
      <img
        src={process.env.PUBLIC_URL + "/images/carousel/3.jpg"}
        alt="asset1"
      />
      <p className="legend">
        On April 26, ScHoolboy Q returns in all of his high-voiced, manic
        rapping splendor. His new album Crash Talk has been announced to hit
        streaming services then. The rapper released a brief, head-scratching
        trailer confirming that finally, after nearly three years, and a few
        recent singles, he's back and ready for more.
      </p>
    </div>
  </Carousel>
);

export default MainCarousel;
