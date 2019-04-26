import React from "react";

// Components
import Rating from "../../Artist/ArtistDisco/Rating/ServiceRating/ServiceRating";
import UserRating from "../../Artist/ArtistDisco/Rating/UserRating/UserRating";
import UserRatingSelect from "./UserRatingSelect/UserRatingSelect";

// styles
import s from "./albumRateList.module.css";

const AlbumRateList = ({ rating, userRating }) => (
  <ul className={s.list}>
    <li className={s.item}>
      <p className={s.text}>Rating:</p>
      <Rating rating={rating} />
    </li>
    <li className={`${s.item} ${s.userRateItem}`}>
      <p className={s.text}>User rating:</p>
      <UserRating rating={rating} />
    </li>
    <li className={`${s.item} ${s.userRateSelect}`}>
      <p className={s.text}>Your rating:</p>
      <UserRatingSelect />
    </li>
  </ul>
);

export default AlbumRateList;
