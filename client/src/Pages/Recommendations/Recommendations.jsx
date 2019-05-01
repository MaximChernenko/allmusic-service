import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
// utils
import withScrollToTop from "../../utils/hocs/withScrollToTop";
// redux
import albumSelectors from "../Album/duck/selectors";
// Components
import RecommendedAlbum from "./RecommendedAlbum/RecommendedAlbum";
// styles
import s from "./recommendations.module.css";

const Recommendations = ({ albums }) => (
  <section className={s.wrapper}>
    <h2 className={s.title}>Recommendations</h2>
    <ul className={s.list}>
      {albums.map(album => (
        <li key={album.id}>
          <RecommendedAlbum album={album} />
        </li>
      ))}
    </ul>
  </section>
);

const mapStateToProps = state => ({
  albums: albumSelectors.getRecommendedAlbums(state)
});

export default compose(
  connect(mapStateToProps),
  withScrollToTop
)(Recommendations);
