import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
// utils
import withScrollToTop from "../../utils/hocs/withScrollToTop";
// redux
import albumSelectors from "../Album/duck/selectors";
// Components
import MainCarousel from "./Carousel/Carousel";
import ArticleBox from "./ArticleBox/ArticleBox";
import SearchForm from "./SearchForm/SearchForm";
import EditorChoiseList from "./EditorChoiseList/EditorChoiseList";
// styles
import s from "./main.module.css";

const MainPage = ({ recommendedAlbums }) => (
  <main>
    <MainCarousel />
    <div className={s.inner}>
      <ArticleBox />
      <div>
        <SearchForm />
        <EditorChoiseList data={recommendedAlbums} />
      </div>
    </div>
  </main>
);

const mapStateToProps = state => ({
  recommendedAlbums: albumSelectors.getRecommendedAlbums(state)
});

export default compose(
  connect(mapStateToProps),
  withScrollToTop
)(MainPage);
