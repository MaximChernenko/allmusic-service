import React from "react";
import { withRouter, NavLink } from "react-router-dom";

// styles
import s from "./artistMenu.module.css";

const ArtistMenu = ({ match: { url } }) => (
  <ul className={s.list}>
    <li className={s.item}>
      <NavLink
        activeClassName={s.activeLink}
        className={s.link}
        to={`${url}/biography`}
      >
        Biography
      </NavLink>
    </li>
    <li className={s.item}>
      <NavLink
        activeClassName={s.activeLink}
        className={s.link}
        to={`${url}/discography`}
      >
        Discography
      </NavLink>
    </li>
    <li className={s.item}>
      <NavLink
        activeClassName={s.activeLink}
        className={s.link}
        to={`${url}/songs`}
      >
        Songs
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
        to={`${url}/related`}
      >
        Related
      </NavLink>
    </li>
  </ul>
);

export default withRouter(ArtistMenu);
