import React from "react";

// Components
import SearchForm from "../Main/SearchForm/SearchForm";
// styles
import s from "./advancedSearch.module.css";

const AdvancedSearch = () => (
  <div className={s.wrapper}>
    <SearchForm marginCorrect={s.marginCorrect} />
  </div>
);

export default AdvancedSearch;
