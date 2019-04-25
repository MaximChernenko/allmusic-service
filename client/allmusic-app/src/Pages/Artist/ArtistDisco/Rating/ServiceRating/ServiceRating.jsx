import React from "react";

// icons
import starDefaultIcon from "../../../../../icons/rate/star.svg";
import starActive from "../../../../../icons/rate/star-blue.svg";

// styles
import s from "./serviceRating.module.css";

const ServiceRating = ({ rating }) => (
  <ul className={s.list}>
    <li>
      <object
        type="image/svg+xml"
        data={rating >= 1 ? starActive : starDefaultIcon}
        className={s.starIcon}
      >
        Star rate
      </object>
    </li>
    <li>
      <object
        type="image/svg+xml"
        data={rating >= 2 ? starActive : starDefaultIcon}
        className={s.starIcon}
      >
        Star rate
      </object>
    </li>
    <li>
      <object
        type="image/svg+xml"
        data={rating >= 3 ? starActive : starDefaultIcon}
        className={s.starIcon}
      >
        Star rate
      </object>
    </li>
    <li>
      <object
        type="image/svg+xml"
        data={rating >= 4 ? starActive : starDefaultIcon}
        className={s.starIcon}
      >
        Star rate
      </object>
    </li>
    <li>
      <object
        type="image/svg+xml"
        data={rating >= 5 ? starActive : starDefaultIcon}
        className={s.starIcon}
      >
        Star rate
      </object>
    </li>
  </ul>
);

export default ServiceRating;
