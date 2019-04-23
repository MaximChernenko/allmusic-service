import React from "react";

// Components
import MainCarousel from "./Carousel/Carousel";
import ArticleBox from "./ArticleBox/ArticleBox";
import SearchForm from "./SearchForm/SearchForm";
import EditorChoiseList from "./EditorChoiseList/EditorChoiseList";
// styles
import s from "./main.module.css";

// options
import albums from "../../options/albums";

const MainPage = () => (
  <main>
    <MainCarousel />
    <div className={s.inner}>
      <ArticleBox />
      <div>
        <SearchForm />
        <EditorChoiseList data={albums} />
      </div>
    </div>
  </main>
);

export default MainPage;
