import React from "react";
import { Link } from "react-router-dom";

// styles
import s from "./authbox.module.css";

const AuthBox = () => (
  <ul className={s.list}>
    <li className={s.item}>
      <Link to="/sign-up" className={s.link}>
        Sign up
      </Link>
    </li>
    <li className={s.item}>
      <Link to="/log-in" className={s.link}>
        Log in
      </Link>
    </li>
  </ul>
);

export default AuthBox;
