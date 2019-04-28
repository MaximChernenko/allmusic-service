import React, { Component } from "react";
import { connect } from "react-redux";
// redux
import albumSelectors from "../Album/duck/selectors";
// Components
import MainCarousel from "./Carousel/Carousel";
import ArticleBox from "./ArticleBox/ArticleBox";
import SearchForm from "./SearchForm/SearchForm";
import EditorChoiseList from "./EditorChoiseList/EditorChoiseList";
// styles
import s from "./main.module.css";

class MainPage extends Component {
  render() {
    const { recommendedAlbums } = this.props;
    return (
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
  }
}

const mapStateToProps = state => ({
  recommendedAlbums: albumSelectors.getRecommendedAlbums(state)
});

export default connect(mapStateToProps)(MainPage);
