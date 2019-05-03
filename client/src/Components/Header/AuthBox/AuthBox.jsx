import React from "react";
import { Link } from "react-router-dom";

// styles
import s from "./authbox.module.css";

const AuthBox = ({ openSignInForm, openSignUpForm }) => (
  <ul className={s.list}>
    <li className={s.item}>
      <Link to="/sign-up" onClick={openSignUpForm} className={s.link}>
        Sign up
      </Link>
    </li>
    <li className={s.item}>
      <Link to="/log-in" onClick={openSignInForm} className={s.link}>
        Log in
      </Link>
    </li>
  </ul>
);

export default AuthBox;
