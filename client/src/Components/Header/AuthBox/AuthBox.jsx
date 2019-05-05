import React from "react";

// styles
import s from "./authbox.module.css";

const AuthBox = ({ openSignInForm, openSignUpForm }) => (
  <ul className={s.list}>
    <li className={s.item}>
      <button type="button" onClick={openSignUpForm} className={s.btn}>
        Sign up
      </button>
    </li>
    <li className={s.item}>
      <button type="button" onClick={openSignInForm} className={s.btn}>
        Log in
      </button>
    </li>
  </ul>
);

export default AuthBox;
