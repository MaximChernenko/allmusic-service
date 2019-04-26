import React from "react";
import { withRouter, NavLink } from "react-router-dom";

// styles
import s from "./albumMenu.module.css";

const AlbumMenu = ({ match: { url } }) => (
  <ul className={s.list}>
    <li className={s.item}>
      <NavLink
        activeClassName={s.activeLink}
        className={s.link}
        to={`${url}/overview`}
      >
        Overview
      </NavLink>
    </li>
    <li className={s.item}>
      <NavLink
        activeClassName={s.activeLink}
        className={s.link}
        to={`${url}/user-reviews`}
      >
        User Reviews
      </NavLink>
    </li>
    <li className={s.item}>
      <NavLink
        activeClassName={s.activeLink}
        className={s.link}
        to={`${url}/credits`}
      >
        Credits
      </NavLink>
    </li>
    <li className={s.item}>
      <NavLink
        activeClassName={s.activeLink}
        className={s.link}
        to={`${url}/releases`}
      >
        Releases
      </NavLink>
    </li>
    <li className={s.item}>
      <NavLink
        activeClassName={s.activeLink}
        className={s.link}
        to={`${url}/similar-albums`}
      >
        Similar Albums
      </NavLink>
    </li>
  </ul>
);

export default withRouter(AlbumMenu);
