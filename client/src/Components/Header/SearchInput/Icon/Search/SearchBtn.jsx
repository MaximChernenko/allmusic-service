import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
// styles
import s from "./searchBtn.module.css";

const SearchBtn = forwardRef(({ src, alt, closeModal }, ref) => (
  <Link
    to="/search"
    onClick={e => {
      closeModal();
    }}
    className={s.link}
  >
    <img ref={ref} src={src} alt={alt} />
  </Link>
));

export default SearchBtn;
