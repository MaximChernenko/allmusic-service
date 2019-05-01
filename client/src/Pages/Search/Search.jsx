import React from "react";

// Components
import SearchBox from "./SearchBox/SearchBox";
import SearchList from "./SearchList/SearchList";
// styles
import s from "./search.module.css";

const Search = () => (
  <div className={s.wrapper}>
    <SearchBox />
    <SearchList />
  </div>
);

// impl

export default Search;
