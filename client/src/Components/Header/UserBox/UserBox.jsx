import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// redux
import operations from "../../../store/session/operations";
// styles
import s from "./userBox.module.css";

const UserBox = ({ user: { name } }) => {
  const dispatch = useDispatch();
  const signOut = () => dispatch(operations.signOut());
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Link to="/user-profile" className={s.link}>
          {name}
        </Link>
      </li>
      <li className={s.item}>
        <button type="button" onClick={signOut} className={s.btn}>
          Log out
        </button>
      </li>
    </ul>
  );
};

export default UserBox;
