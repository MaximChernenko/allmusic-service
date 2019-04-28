import React from "react";
import { Link } from "react-router-dom";
// styles
import s from "./search.module.css";

const SearchBtn = ({ src, alt }) => (
  <Link to="/search" className={s.link}>
    <img src={src} alt={alt} />
  </Link>
);

export default SearchBtn;
