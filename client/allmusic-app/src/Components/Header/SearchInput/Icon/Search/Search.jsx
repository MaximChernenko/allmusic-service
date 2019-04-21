import React from "react";

// styles
import s from "./search.module.css";

const SearchBtn = ({ src, alt }) => (
  <button type="button" className={s.btn}>
    <img src={src} alt={alt} />
  </button>
);

export default SearchBtn;
