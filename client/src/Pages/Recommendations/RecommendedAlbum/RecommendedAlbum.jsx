import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import slugify from "slugify";
// redux
import artistSelectors from "../../Artist/duck/selectors";
// styles
import s from "./recommendedAlbum.module.css";

const RecommendedAlbum = ({ album, artists }) => (
  <div className={s.wrapper}>
    <div className={s.imgInner}>
      <img
        className={s.img}
        src={process.env.PUBLIC_URL + `/images/albums/${album.id}.jpg`}
        alt={album.name}
      />
      <div className={s.box}>
        <p className={s.band}>
          {artists[album.band] && artists[album.band].name}
        </p>
        <p className={s.album}>{album.name}</p>
      </div>
    </div>
    <div className={s.inner}>
      <p className={s.text}>
        {album.review &&
          album.review.length > 500 &&
          album.review.slice(0, 500) + " ..."}
      </p>
      <Link
        className={s.link}
        to={`/album/${slugify(album.name).toLowerCase() + "-" + album.id}`}
      >
        Learn More
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  artists: artistSelectors.getArtists(state)
});

export default connect(mapStateToProps)(RecommendedAlbum);
