import React from "react";
import { Link } from "react-router-dom";

// styles
import s from "./logo.module.css";

const Logo = () => (
  <Link to="/" className={s.logo}>
    <span className={s.logoUpper}>All</span>music
  </Link>
);

export default Logo;
