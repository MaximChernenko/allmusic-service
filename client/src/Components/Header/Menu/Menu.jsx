import React from "react";
import { Link } from "react-router-dom";
// styles
import s from "./menu.module.css";

const Menu = () => (
  <ul className={s.list}>
    <li>
      <Link className={s.link} to="/releases">
        New Releases
      </Link>
    </li>
    <li>
      <Link className={s.link} to="/discover">
        Discover
      </Link>
    </li>
    <li>
      <Link className={s.link} to="/articles">
        Articles
      </Link>
    </li>
    <li>
      <Link className={s.link} to="/recommendations">
        Recommendations
      </Link>
    </li>
    <li>
      <Link className={s.link} to="/user-profile">
        My Profile
      </Link>
    </li>
    <li>
      <Link className={s.link} to="/advanced-search">
        Advanced Search
      </Link>
    </li>
  </ul>
);

export default Menu;
