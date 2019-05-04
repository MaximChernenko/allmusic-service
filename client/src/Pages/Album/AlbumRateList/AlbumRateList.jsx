import React from "react";

import { connect } from "react-redux";
// redux
import sessionSelectors from "../../../store/session/selectors";
// Components
import Rating from "../../Artist/ArtistDisco/Rating/ServiceRating/ServiceRating";
import UserRating from "../../Artist/ArtistDisco/Rating/UserRating/UserRating";
import UserRatingSelect from "./UserRatingSelect/UserRatingSelect";

// styles
import s from "./albumRateList.module.css";

const AlbumRateList = ({ album, isAuthenticated }) => (
  <ul className={s.list}>
    <li className={s.item}>
      <p className={s.text}>Rating:</p>
      <Rating rating={album.rating} />
    </li>
    <li className={`${s.item} ${s.userRateItem}`}>
      <p className={s.text}>User rating:</p>
      <UserRating rating={album.userRating} />
    </li>
    {isAuthenticated && (
      <li className={`${s.item} ${s.userRateSelect}`}>
        <p className={s.text}>Your rating:</p>
        <UserRatingSelect albumId={album.id} />
      </li>
    )}
  </ul>
);

const mapStateToProps = state => ({
  isAuthenticated: sessionSelectors.isAuthenticated(state)
});

export default connect(mapStateToProps)(AlbumRateList);
