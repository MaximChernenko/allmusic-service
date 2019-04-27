import React from "react";
import { connect } from "react-redux";

// redux
import albumSelectors from "../../../Album/duck/selectors";

// styles
import s from "./editorChoiseItem.module.css";

const EditorChoiseItem = ({ item, artist }) => (
  <div className={s.wrapper}>
    <img
      className={s.img}
      src={process.env.PUBLIC_URL + `/images/albums/${item.id}.jpg`}
      alt={item.name}
    />
    <div className={s.inner}>
      <p className={s.band}>{artist && artist.name}</p>
      <p className={s.album}>{item.name}</p>
    </div>
  </div>
);

const mapStateToProps = (state, { item: { band } }) => ({
  artist: albumSelectors.getArtistById(state, band)
});

export default connect(mapStateToProps)(EditorChoiseItem);
