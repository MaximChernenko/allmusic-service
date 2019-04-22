import React from "react";

// Components
import MainCarousel from "./Carousel/Carousel";
import ArticleBox from "./ArticleBox/ArticleBox";
// AdvancedAlbumSearch
// EditorChoiseList
// styles
import s from "./main.module.css";

const MainPage = () => (
  <div>
    <MainCarousel />
    <div className={s.inner}>
      <ArticleBox />
    </div>
  </div>
);

export default MainPage;
